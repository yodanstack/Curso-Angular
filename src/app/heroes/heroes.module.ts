import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";


@NgModule({
declarations:[
ListComponent,
HeroComponent
],
exports:[
  HeroComponent,
  ListComponent,
],
imports:[
  CommonModule
]

})
export class HeroesModule {

}
