import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-registros',
  templateUrl: './tabla-registros.component.html',
  styleUrls: ['./tabla-registros.component.css']
})
export class TablaRegistrosComponent implements OnInit {

  listRegistrosMes: Array<any> = [
    { dia: 1, concepto: "Seguros", descripcion: "Coche", cantidad: 315}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
