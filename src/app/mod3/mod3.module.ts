import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod3comp1Component } from './mod3comp1.component';
import { Mod3comp2Component } from './mod3comp2.component';
import { Mod3comp3Component } from './mod3comp3.component';
import { Mod4Module } from '../mod4/mod4.module';



@NgModule({
  declarations: [Mod3comp1Component, Mod3comp2Component, Mod3comp3Component],
  imports: [
    CommonModule,
    Mod4Module
  ],
  exports: [Mod3comp1Component, Mod3comp2Component, Mod3comp3Component]
})
export class Mod3Module { }
