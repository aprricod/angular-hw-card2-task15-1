import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod4comp1Component } from './mod4comp1.component';
import { Mod4comp2Component } from './mod4comp2.component';
import { Mod4comp3Component } from './mod4comp3.component';
import { Mod4comp4Component } from './mod4comp4.component';
import { Mod4comp5Component } from './mod4comp5.component';



@NgModule({
  declarations: [Mod4comp1Component, Mod4comp2Component, Mod4comp3Component, Mod4comp4Component, Mod4comp5Component],
  imports: [
    CommonModule
  ],
  exports: [Mod4comp1Component, Mod4comp2Component, Mod4comp3Component, Mod4comp4Component, Mod4comp5Component]
})
export class Mod4Module { }
