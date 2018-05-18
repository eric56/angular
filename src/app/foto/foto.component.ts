import { Component, Input } from "@angular/core";

@Component({
    selector: 'foto',
    template: `<img  class="card-img-top" src="{{url}}" alt ="{{titulo}}" />`,
    styles:[`
        .card-img-top {
            height: 220px;
            object-fit: cover;
        }
    `]
})
export class FotoComponent{
    @Input() url = '';
    @Input() titulo = '';
    @Input() descricao = '';
    @Input() _id = '';
}