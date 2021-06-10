import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
  }

  transferir(){
   console.log('Solicitada nova transferência');
   const valorEmitir: Transferencia = {
    valor: this.valor,
    destino: this.destino};
   this.service.adicionar(valorEmitir).subscribe(resultado =>{
     console.log(resultado);
     this.limparCampos();
   })

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
