import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faThList, faXmark } from '@fortawesome/free-solid-svg-icons';

import { ITarea } from '../../Interfaces/ITarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  faCoffee = faXmark; 
  
  @Input() tarea:ITarea = {
    descripcion:"",
    dia:"",
    recordatorio: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  get Recordatorio(): boolean {
    return this.tarea.recordatorio;
  }

}
