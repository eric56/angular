import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styles: []
})
export class MensagemComponent implements OnInit {

  @Input() tipo = 'primary';
  @Input() textoMsg = '';

  constructor() { }

  ngOnInit() {
  }

}
