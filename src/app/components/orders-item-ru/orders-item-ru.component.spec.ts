import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemRuComponent } from './orders-item-ru.component';

describe('OrdersItemRuComponent', () => {
  let component: OrdersItemRuComponent;
  let fixture: ComponentFixture<OrdersItemRuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemRuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemRuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
