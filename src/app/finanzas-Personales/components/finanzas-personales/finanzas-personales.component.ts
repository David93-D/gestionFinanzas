import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finanzas-personales',
  templateUrl: './finanzas-personales.component.html',
  styleUrls: ['./finanzas-personales.component.css']
})
export class FinanzasPersonalesComponent implements OnInit {

  fecha = new Date();

  meses = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  mesActual = "";
  anyoActual = 0;

  constructor() { }

  ngOnInit(): void {
    this.anyoActual = this.fecha.getFullYear();
    this.mesActual = this.meses[this.fecha.getMonth()+1];
  }

  prevMonth() {
    console.log("Mes Anterior");
  }

  nextMonth() {
    console.log("Mes Siguiente");
  }

  addRegister() {
    console.log("Nuevo Registro");
  }

}
