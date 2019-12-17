import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

import { TopicsComponent } from './componentes/topics/topics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticulosComponent } from './componentes/articulos/articulos.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopicsComponent,
    ArticulosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
