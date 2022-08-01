import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { BotonAgregarComponent } from './componentes/boton-agregar/boton-agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    BotonAgregarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
