import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class Dbzservice {

  public character: Character[] = [{
    id: uuid(),
    name:'krillin',
    power: 1000
  },{
    id: uuid(),
    name:'goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500

  }
];

onnewcharacter(Character:Character):void{

  const newCharacter: Character = {id: uuid(), ...Character}

 this.character.push(newCharacter);
}

// onedeletcharacter(index:number){
//   this.character.splice(index, 1)
// }

DeleteCharaacterbyId( id:string ){
  this.character = this.character.filter(Character => Character.id !== id );

}

}
