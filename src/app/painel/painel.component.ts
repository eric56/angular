import { Component, Input } from "@angular/core";

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    styles:[`
        .card {
            height: 100%;
        }
    `]
})
export class PainelComponent{

    @Input() tituloPainel

}