import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { BotonAgregarComponent } from './componentes/boton-agregar/boton-agregar.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { FormularioTareaComponent } from './componentes/formulario-tarea/formulario-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    BotonAgregarComponent,
    ListaTareasComponent,
    FormularioTareaComponent
  ],
  imports: [
    BrowserModule, 
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
