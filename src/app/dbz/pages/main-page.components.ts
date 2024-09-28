import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainpageComponent {
  constructor( public dbzService: Dbzservice ){


  }
}
