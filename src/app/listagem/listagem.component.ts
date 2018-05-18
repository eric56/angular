import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { ModuloRoteador } from '../app.routes';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listPictures: FotoComponent[] = [];
  mensagem = new MensagemComponent();

  constructor(private serviceFoto: FotoService){

    serviceFoto.listar()
      .subscribe( response => {
        this.listPictures = response;
      });
  }

  ngOnInit() {
  }

  remover(foto: FotoComponent){
    this.serviceFoto
      .deletar(foto)
      .subscribe(mensagemApi => {
        this.mensagem = mensagemApi;
        this.listPictures = this.listPictures.filter(pictureDeleted => pictureDeleted != foto);
      },
      responseError => console.error(responseError)
    );
  }

}
