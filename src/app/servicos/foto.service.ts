import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

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

    cadastrar(foto: FotoComponent): Observable<Object>{
        return this.http.post(this.url, foto, this.header);
    }

    deletar(foto: FotoComponent): Observable<Object>{
        return this.http.delete(this.url + foto._id, this.header);
    }

    consultar(fotoId: string): Observable<FotoComponent>{
        return this.http.get<FotoComponent>(this.url + fotoId);
    }

    alterar(foto: FotoComponent): Observable<FotoComponent>{
        return this.http.put<FotoComponent>(this.url + foto._id, foto, this.header);
    }

}