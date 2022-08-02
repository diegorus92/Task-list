import { Component, OnInit } from '@angular/core';
import { TAREAS } from '../../MockTareas';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  listaTareas = TAREAS;

  constructor() { }

  ngOnInit(): void {
  }

}
