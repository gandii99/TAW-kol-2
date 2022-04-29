import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-ru',
  templateUrl: './orders-item-ru.component.html',
  styleUrls: ['./orders-item-ru.component.css']
})
export class OrdersItemRuComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
