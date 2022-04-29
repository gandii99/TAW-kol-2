import { Component, OnInit } from '@angular/core';
import {RuDataService} from "../../services/ru-data.service";

@Component({
  selector: 'app-orders-ru',
  templateUrl: './orders-ru.component.html',
  styleUrls: ['./orders-ru.component.css']
})
export class OrdersRuComponent implements OnInit {

  public items$: any;

  constructor(private service: RuDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    })
  }

}
