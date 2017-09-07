import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { comp } from "./comp";
import { HttpModule } from "@angular/http";



@NgModule({
  declarations: [

    comp
  ],
  imports: [
    BrowserModule,
    HttpModule
  
  ],
  exports: [
    comp
  ]
})
export class ZokiModule { }