import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooldalModule } from './oldalak/fooldal/fooldal.module';





@NgModule({
  declarations: [
    AppComponent,
    


    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FooldalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
