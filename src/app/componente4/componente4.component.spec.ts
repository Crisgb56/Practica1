import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente4Component } from './componente4.component';
import { OnInit } from '@angular/core';

describe('Componente4Component', () => {
  let component: Componente4Component;
  let fixture: ComponentFixture<Componente4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});