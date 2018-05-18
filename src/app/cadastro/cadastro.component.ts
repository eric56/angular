import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
  
  foto = new FotoComponent();

  constructor(  private service: FotoService, 
                private rota: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.rota.params.subscribe(parametro => {

      if(parametro.fotoId){
        this.service
          .consultar(parametro.fotoId)
          .subscribe(
              fotoApi => this.foto = fotoApi
          );
      }
    });
  }

  salvar(){

    let headerCadastro = new HttpHeaders;
    headerCadastro.append('Content-Type', 'application/json');

    if(this.foto._id){
      this.service
            .alterar(this.foto)
            .subscribe(
              response => {
                this.router.navigate(['']);
              },
              responseError => console.error(responseError)
            );
    } else{
      this.service.cadastrar(this.foto)
      .subscribe(
        response => {
            this.foto = new FotoComponent(); 
          },
          erro => console.error("Erro")
      );
    }

  }

}
