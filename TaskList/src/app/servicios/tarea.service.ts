import { Injectable } from '@angular/core';
import { ITarea } from '../Interfaces/ITarea';
import { TAREAS } from '../MockTareas';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  ListaTareas = TAREAS;

  constructor() { }

  get Tareas(){
    return this.ListaTareas;//TAREAS;
  }

  set Tarea(tarea:ITarea){
    this.generarId(tarea);
    this.ListaTareas.push(tarea);
    console.log('lista actualizada:',this.ListaTareas);
  }

  generarId(tarea:ITarea){
    if(this.ListaTareas.length > 0){
      let ultimoId:number = this.ListaTareas[this.ListaTareas.length-1].id as number;
      tarea.id = (ultimoId + 1);
    }
    else{
      tarea.id = 1;
    }
  }

  buscarIndiceTarea(tarea:ITarea):number{
    return this.ListaTareas.findIndex(obj => obj.id == tarea.id)
  }

  modificarTarea(tarea:ITarea):void{
    let indice:number = this.buscarIndiceTarea(tarea);
    if(indice > -1){
      this.ListaTareas[indice] = tarea;
      console.log("Lista actualizada en indice:", indice);
      console.log(this.ListaTareas);
    }
    else
      console.log("tarea no encontrada");
  }

  removerTarea(tarea:ITarea):void{
    let indice:number = this.buscarIndiceTarea(tarea);
    if(indice > -1){
      this.ListaTareas.splice(indice, 1);
    }
    else
      console.log("tarea no encontrada");
  }
}
