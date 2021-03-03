import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2comp1Component } from './mod2comp1.component';
import { Mod2comp2Component } from './mod2comp2.component';
import { Mod3Module } from '../mod3/mod3.module';



@NgModule({
  declarations: [Mod2comp1Component, Mod2comp2Component],
  imports: [
    CommonModule,
    Mod3Module
  ],
  exports: [Mod2comp1Component, Mod2comp2Component]
})
export class Mod2Module { }
