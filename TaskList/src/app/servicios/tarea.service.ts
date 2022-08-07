import { Injectable } from '@angular/core';
import { ITarea } from '../Interfaces/ITarea';
import { TAREAS } from '../MockTareas';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
    contentType: 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  //ListaTareas = TAREAS;               //USADO PARA EL MockTareas.ts

  tareas:ITarea[] = []; //almacenara las tarear recuperadas de la DB
  private ListaTareas = new BehaviorSubject<ITarea[]>([]); //contendrá las tareas actualizadas asincronicamente,
                                                          //para que los demas componentes qeu necesiten hacerlo,
                                                          //se suscriban a ella y se actualizen también
  private apiUrl = "http://localhost:3000/tareas";

  constructor(private http:HttpClient) { }

  /*get Tareas(){                         //USADO PARA EL MockTareas.ts
    return this.ListaTareas;//TAREAS;
  }*/

  get ListaTarea$():Observable<ITarea[]>{ //devuelve asincronicamente mediante subscripción de los demás componentes a el contenido de la ListaTareas
    return this.ListaTareas.asObservable();//De esta forma se comparte la información de ListaTareas con cualquier componente que se le subscriba
  }

  getTareas():Observable<ITarea[]> { //devuelve asincronicamente las tareas contenidas en la DB
    return this.http.get<ITarea[]>(this.apiUrl);
  }

  recuperarTareas():void{ //guarda el contenido de la lista "tareas" de esta clase en en la ListaTareas para tenerla actualizada
    this.ListaTareas.next(this.tareas);
  }

  /*set Tarea(tarea:ITarea){                //USADO PARA EL MockTareas.ts
    this.generarId(tarea);
    this.ListaTareas.push(tarea);
    console.log('lista actualizada:',this.ListaTareas);
  }*/


  agregarTarea(tarea:ITarea):Observable<ITarea>{//agrega la nueva tarea en la lista tareas de la clase
                                                //Agrega la tarea nueva a la ListaTareas
                                                //Agrega la tarea nueva a la DB
    //this.generarId(tarea); //Esto me genera error 
    this.tareas.push(tarea);
    this.ListaTareas.next(this.tareas);
    return this.http.post<ITarea>(this.apiUrl, tarea, HttpOptions);
  }

  

  /*generarId(tarea:ITarea){
    if(this.ListaTareas.length > 0){
      let ultimoId:number = this.ListaTareas[this.ListaTareas.length-1].id as number;
      tarea.id = (ultimoId + 1);
    }
    else{
      tarea.id = 1;
    }
  }*/

  /*buscarIndiceTarea(tarea:ITarea):number{                 //USADO PARA EL MockTareas.ts
    return this.ListaTareas.findIndex(obj => obj.id == tarea.id)
  }*/

  /*modificarTarea(tarea:ITarea):void{          //USADO PARA EL MockTareas.ts
    let indice:number = this.buscarIndiceTarea(tarea);
    if(indice > -1){
      this.ListaTareas[indice] = tarea;
      console.log("Lista actualizada en indice:", indice);
      console.log(this.ListaTareas);
    }
    else
      console.log("tarea no encontrada");
  }*/

  modificarTarea(tarea:ITarea):Observable<ITarea>{//Modifica de momento el estado de "recordatorio" de una tarea en la DB
    let url = `${this.apiUrl}/${tarea.id}`;
    return this.http.put<ITarea>(url, tarea, HttpOptions);
  }

  /*removerTarea(tarea:ITarea):void{                    //USADO PARA EL MockTareas.ts
    let indice:number = this.buscarIndiceTarea(tarea);
    if(indice > -1){
      this.ListaTareas.splice(indice, 1);
    }
    else
      console.log("tarea no encontrada");
  }*/
}
