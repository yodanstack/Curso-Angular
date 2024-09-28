import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { every } from 'rxjs';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterlist: Character[] = [{
    name: 'Truncks',
    power: 10
  }];

  // public onDeteled  = this.ondeleteCharacter;
  @Output()
  public onDelete = new EventEmitter<String>()
  // public onDelete: EventEmitter<number> = new EventEmitter();



  ondeleteCharacter( id?: string ) {
    //TODO: emitir el ID del personaje
    // console.log(index);
    if (!id ) return;
    console.log(id);

    this.onDelete.emit(id);
  }

}
