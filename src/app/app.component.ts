import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
 public title: string = 'Hola mundo';
 public counter:number = 10;


public increasiBY( value: number){
  this.counter += value;

  }

  reset (){
    this.counter = 10;
}
}
