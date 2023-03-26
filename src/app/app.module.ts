import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiclosdevidaComponent } from './clase/componentes/Ciclos-de-vida/ciclos-de-vida.component';
import { ComponentesComponent } from './clase/componentes/componentes.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    CiclosdevidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
