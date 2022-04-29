import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRuComponent } from './orders-ru.component';

describe('OrdersRuComponent', () => {
  let component: OrdersRuComponent;
  let fixture: ComponentFixture<OrdersRuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersRuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersRuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
