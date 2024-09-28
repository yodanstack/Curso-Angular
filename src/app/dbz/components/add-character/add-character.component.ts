import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public Character: Character = {
    name: '',
    power: 0,
  };


  emitcharacter():void {

    // debugger;

    console.log(this.Character)

    if (this.Character.name.length === 0) return;

    this.onNewCharacter.emit(this.Character);

   this.Character = {name: '', power: 0 }
  }
}

