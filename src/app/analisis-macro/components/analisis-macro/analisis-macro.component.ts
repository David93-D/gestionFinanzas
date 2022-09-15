import { Component, OnInit } from '@angular/core';
import { MacrosService } from '../../services/macros.service';

@Component({
  selector: 'app-analisis-macro',
  templateUrl: './analisis-macro.component.html',
  styleUrls: ['./analisis-macro.component.css']
})
export class AnalisisMacroComponent implements OnInit {

  constructor(private macroService: MacrosService) { }

  ngOnInit(): void {
    this.macroService.getCategories().subscribe(response => console.log(response));
  }

}
