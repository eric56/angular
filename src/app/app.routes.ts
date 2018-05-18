import { Routes, RouterModule } from "@angular/router"

import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { Error404Component } from "./error404/error404.component";

const routes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:fotoId', component: CadastroComponent},
    {path: '**', component: Error404Component}
]

export const ModuloRoteador = RouterModule.forRoot(routes);