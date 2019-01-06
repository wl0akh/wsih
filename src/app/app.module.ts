import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import { HomeComponent } from './home/home.component';
import { HeaderNaveComponent } from './shared/header-nave/header-nave.component';


@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    HomeComponent,
    HeaderNaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
