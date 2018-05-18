import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { map } from "rxjs/operators/map";
import { MensagemComponent } from "../mensagem/mensagem.component";

@Injectable()
export class FotoService{

    url: string = 'http://localhost:3000/v1/fotos/';

    header = {
        headers:new HttpHeaders({'Content-Type': 'application/json'})
    }

    constructor(private http: HttpClient){}

    listar(): Observable<FotoComponent[]>{
        return this.http.get<FotoComponent[]>(this.url);
    }

    cadastrar(foto: FotoComponent): Observable<MensagemComponent>{
        return this .http
                    .post(this.url, foto, this.header)
                    .pipe(
                        map( () => {
                            let mensagem = new MensagemComponent();
                            mensagem.textoMsg = `Foto ${foto.titulo} cadastrada com sucesso!!!`;
                            mensagem.tipo='success';

                            return mensagem;
                        })
                    );
    }

    deletar(foto: FotoComponent): Observable<MensagemComponent>{
        return this .http
                    .delete(this.url + foto._id, this.header)
                    .pipe(
                        map(() => {
                            let mensagem = new MensagemComponent();
                            mensagem.textoMsg = `Foto ${foto.titulo} deletada com sucesso!!!`;
                            mensagem.tipo='info';

                            return mensagem;
                        })
                    );
    }

    consultar(fotoId: string): Observable<FotoComponent>{
        return this.http.get<FotoComponent>(this.url + fotoId);
    }

    alterar(foto: FotoComponent): Observable<MensagemComponent>{
        return this .http
                    .put<FotoComponent>(this.url + foto._id, foto, this.header)
                    .pipe(
                        map (() => {
                            let mensagem = new MensagemComponent();
                            mensagem.textoMsg = `Foto ${foto.titulo} alterada com sucesso!!!`;
                            mensagem.tipo='success';

                            return mensagem;
                        })
                    );
    }

}