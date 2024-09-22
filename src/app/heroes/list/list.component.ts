import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'hulk', 'she hulk', 'Thor']
  public deleteHero?:string = '';


  removeLastHero(): void {
  this.deleteHero =  this.heroNames.pop();

  }


  restablecerList(): void {
    this.heroNames = ['Spiderman', 'Ironman', 'hulk', 'she hulk', 'Thor'];
  }
}
