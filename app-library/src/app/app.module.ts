import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { BooksDasboardModule } from "./books-dashboard/books-dashboard.module";

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BooksDasboardModule

  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
