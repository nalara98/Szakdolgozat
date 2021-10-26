import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateModule } from './oldalak/update/update.module';











@NgModule({
  declarations: [
    AppComponent,
    

 
   
   
   
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    MatNativeDateModule,
    UpdateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
