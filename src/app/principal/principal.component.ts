import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  curso1: any = { nombre:"Beca Angular", total_dias:9, descripcion:"Curso sobre angular y TypeScript"};
  curso2: any = { nombre:'Beca Java', total_dias:10, descripcion:'Formacion sobre Java'};
  constructor() { }

  ngOnInit(): void {
  }

}
