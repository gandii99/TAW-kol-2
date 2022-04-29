import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RuDataService} from "../../services/ru-data.service";

@Component({
  selector: 'app-orders-details-ru',
  templateUrl: './orders-details-ru.component.html',
  styleUrls: ['./orders-details-ru.component.css']
})
export class OrdersDetailsRuComponent implements OnInit {

  public item$: any;
  constructor(private service: RuDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){

    let id: string = '';
    this.route.paramMap.subscribe((params:any)=>{
      id = params.get('id');
    })

    this.service.getById(id).subscribe((res: any) => {
      this.item$ = res;
    });
  }

}
