import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainpageComponent {


  public character: Character[] = [{
    name:'krillin',
    power: 1000
  },{
    name:'goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }
];
}
