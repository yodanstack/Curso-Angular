import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heros',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name: string =  'Iron man';
public age: number = 45;

 get capitaliceName() :string {
  return this.name.toLocaleUpperCase();
 }


 getHerodescription(): string{
  return `${ this.name } - ${ this.age }`;
 }



 changeHero(): void {
  this.name = 'spiderman'
}

ChangeAge (): void{
  this.age = 25
}

ResetFrom():void {
  this.name = 'ironman';
  this.age = 45;

  // document.querySelectorAll('h1')!.forEach(element => {
  //   element.innerHTML = '<h1>Hola Mundo</h1>'
  // })
}
}
