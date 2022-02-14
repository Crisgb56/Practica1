import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  @Input("propiedadCurso1") datosPasadosComponente: any;
  @Input("contador") contador:any;

  
  constructor() { }

  ngOnInit(): void {
  }

}
