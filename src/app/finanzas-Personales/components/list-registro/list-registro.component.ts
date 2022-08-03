import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr[app-list-registro]',
  templateUrl: './list-registro.component.html',
  styleUrls: ['./list-registro.component.css']
})
export class ListRegistroComponent implements OnInit {

  @Input() registro: any;

  constructor() { }

  ngOnInit(): void {
  }

}
