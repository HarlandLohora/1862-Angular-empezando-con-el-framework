import { Component, OnInit, Input } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss'],
})
export class EstadoCuentaComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private service: TransferenciasService) {
    this.transferencias = this.service.transferencias;
  }

  ngOnInit(): void {}
}
