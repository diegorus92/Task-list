import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }


  formulario:FormGroup = this.formBuilder.group({
    descripcion: ['',[Validators.required]],
    fecha: ['',[Validators.required]],
    recordatorio:[false,[]],
  });

  ngOnInit(): void {
  }

  get Descripcion(){
    return this.formulario.get('descripcion');
  }

  get Fecha(){
    return this.formulario.get('fecha');
  }

  onEnviar(evento:Event):void{
    evento.preventDefault;

    if(this.formulario.valid){
      console.log("formulario valido!");
      console.log(this.formulario.value);
      this.formulario.reset();
    }
    else{
      alert("formulario invalido :(");
      this.formulario.markAllAsTouched();
    }
  }

}
