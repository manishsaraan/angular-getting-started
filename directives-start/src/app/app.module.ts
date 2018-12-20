import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BasicHightlightDirective } from '../app/basic-highlight/basic-highlight.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
