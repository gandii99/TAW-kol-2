import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsRuComponent } from './orders-details-ru.component';

describe('OrdersDetailsRuComponent', () => {
  let component: OrdersDetailsRuComponent;
  let fixture: ComponentFixture<OrdersDetailsRuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsRuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsRuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
