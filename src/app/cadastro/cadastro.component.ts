import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
  
  foto = new FotoComponent();
  mensagem = new MensagemComponent();

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
                this.mensagem.textoMsg = `Foto ${this.foto.titulo} salva com sucesso!!!`;
                this.mensagem.tipo='success';
                setTimeout(() => {
                  this.router.navigate(['']);
                }, 2000);
              },
              erro => {
                this.mensagem.textoMsg = `Ocorreu um erro ao salvar a foto ${this.foto.titulo}`;
                this.mensagem.tipo='danger';
              }
            );
    } else{
      this.service.cadastrar(this.foto)
      .subscribe(
        response => { 
          this.mensagem.textoMsg = `Foto ${this.foto.titulo} salva com sucesso!!!`;
          this.mensagem.tipo='success';
          this.foto = new FotoComponent();
        },
        erro => {
          this.mensagem.textoMsg = `Ocorreu um erro ao salvar a foto ${this.foto.titulo}`;
          this.mensagem.tipo='danger';
        }
      );
    }

  }

}
