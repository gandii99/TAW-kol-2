import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersRuComponent} from "./components/orders-ru/orders-ru.component";
import {OrdersDetailsRuComponent} from "./components/orders-details-ru/orders-details-ru.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersRuComponent
  },
  {
    path: 'api/posts/:id',
    component: OrdersDetailsRuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
