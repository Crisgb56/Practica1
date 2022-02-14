import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
@Input("propiedadCurso1") datosPasadosComponente: any;
@Input("propiedadCurso2") datosPasadosComponente2: any;
contador:number=0;
eventoBotonAngular(){
  let sup= this.datosPasadosComponente.nombre;
  this.datosPasadosComponente.nombre=this.datosPasadosComponente2.nombre;
  this.datosPasadosComponente2.nombre=sup;
  let sup2=this.datosPasadosComponente.descripcion;
  this.datosPasadosComponente.descripcion=this.datosPasadosComponente2.descripcion;
  this.datosPasadosComponente2.descripcion=sup2;
  this.contador++;
  console.log('Ejecutamos el evento del intercambio para curso1 y curso 2 ');
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
