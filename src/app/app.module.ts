import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CartableComponent } from './cartable/cartable.component';
import { CarService } from './car.service';


@NgModule({
  declarations: [
    AppComponent,
    CartableComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
