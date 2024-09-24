import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainpageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
