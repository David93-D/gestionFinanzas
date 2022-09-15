import { Injectable } from '@angular/core';
import { IRegistro } from '../interfaces/i-registro';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor() { }

  getRegistrosMes() {
    return [      
      { dia: 1, concepto: "Seguros", descripcion: "Coche", cantidad: 315},
      { dia: 2, concepto: "Alimentación", descripcion: "Monster", cantidad: 1.60},
      { dia: 3, concepto: "Ocio", descripcion: "Cena", cantidad: 20},
      { dia: 4, concepto: "Dividendos", descripcion: "Fidelity", cantidad: 10}
    ];
  }

}
