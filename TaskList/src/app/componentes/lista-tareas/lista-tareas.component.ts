import { Component, OnInit } from '@angular/core';
import { TAREAS } from '../../MockTareas';
import { ITarea } from 'src/app/Interfaces/ITarea';
import { TareaService } from "../../servicios/tarea.service";

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas:ITarea[] = [];

  constructor(private servicioTareas:TareaService) { }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas():void{
    this.tareas = this.servicioTareas.Tareas;
  }

  modificarRecordatorio(tarea:ITarea):void{
    tarea.recordatorio = !tarea.recordatorio;
    this.servicioTareas.modificarTarea(tarea);
  }


}
