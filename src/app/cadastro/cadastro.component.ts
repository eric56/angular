import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
  
  foto = new FotoComponent();
  mensagem = new MensagemComponent();
  formCadastro: FormGroup;

  constructor(  private service: FotoService, 
                private rota: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder) { 

                  this.formCadastro = formBuilder.group({
                    titulo: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
                    url: ['', Validators.required],
                    descricao: ''
                  }) 

                }

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
              mensagemApi => { 
                this.mensagem = mensagemApi;
                this.foto = new FotoComponent();
                setTimeout(() => {
                  this.router.navigate(['']);
                }, 2000);
              },
              erro => {
                this.mensagem.textoMsg = `Ocorreu um erro ${erro}`;
                this.mensagem.tipo='danger';
              }
            );
    } else{
      this.service.cadastrar(this.foto)
      .subscribe(
        mensagemApi => { 
          this.mensagem = mensagemApi;
          this.foto = new FotoComponent();
        },
        erro => {
          this.mensagem.textoMsg = `Ocorreu um erro ${erro}`;
          this.mensagem.tipo='danger';
        }
      );
    }

  }

}
