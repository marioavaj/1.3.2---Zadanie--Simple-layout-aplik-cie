import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBadgeComponent } from './shopping-cart-badge.component';

describe('ShoppingCartBadgeComponent', () => {
  let component: ShoppingCartBadgeComponent;
  let fixture: ComponentFixture<ShoppingCartBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
