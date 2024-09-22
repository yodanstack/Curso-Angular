import { NgModule } from "@angular/core";
import { CounterCompomnent } from "./components/counter/counter.components";


@NgModule({
  declarations: [
    CounterCompomnent,
  ],
  exports: [
    CounterCompomnent
  ]
})
export class Counter {

}
