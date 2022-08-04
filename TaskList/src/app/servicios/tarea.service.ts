import { Injectable } from '@angular/core';
import { TAREAS } from '../MockTareas';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  ListaTareas = TAREAS;

  constructor() { }

  get Tareas(){
    return TAREAS;
  }
}
