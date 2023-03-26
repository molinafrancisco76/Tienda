import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string = 'Tienda'; //Explicito
  nombres = 'Francisco Jesús Molina Bovea'; //Implicito

  constructor(){
    this.nombres = 'Francisco';
  }

  public Actualizarnombre(){
    this.nombres = "El propio Pacho Molina"
  }
}
