import { Component, OnInit } from '@angular/core';
import { IRegistro } from '../../interfaces/i-registro';
import { RegistrosService } from '../../services/registros.service';

@Component({
  selector: 'tabla-registros',
  templateUrl: './tabla-registros.component.html',
  styleUrls: ['./tabla-registros.component.css']
})
export class TablaRegistrosComponent implements OnInit {

  conceptos = [ "DIA", "CONCEPTO", "DESCRIPCIÓN", "€", "-"]

  listRegistrosMes: IRegistro[] = [];

  constructor(public registrosService: RegistrosService) { }

  ngOnInit(): void {
    this.listRegistrosMes = this.registrosService.getRegistrosMes();
  }

}
