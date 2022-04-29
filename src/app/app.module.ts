import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersRuComponent } from './components/orders-ru/orders-ru.component';
import { OrdersItemRuComponent } from './components/orders-item-ru/orders-item-ru.component';
import { OrdersDetailsRuComponent } from './components/orders-details-ru/orders-details-ru.component';
import {RuDataService} from "./services/ru-data.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OrdersRuComponent,
    OrdersItemRuComponent,
    OrdersDetailsRuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RuDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
