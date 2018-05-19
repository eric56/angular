import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModuloRoteador } from "./app.routes";
import { Error404Component } from './error404/error404.component';
import { FotoService } from './servicos/foto.service';
import { MensagemComponent } from './mensagem/mensagem.component';
import { FiltroPorTitulo } from "./listagem/lista.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    Error404Component,
    MensagemComponent,
    FiltroPorTitulo
  ],
  imports: [
    BrowserModule,
    FotoModule,
    PainelModule,
    HttpClientModule,
    ModuloRoteador,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
