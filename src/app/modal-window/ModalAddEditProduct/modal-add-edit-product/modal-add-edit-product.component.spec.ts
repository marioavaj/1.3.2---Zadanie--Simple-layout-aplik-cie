import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEditProductComponent } from './modal-add-edit-product.component';

describe('ModalAddEditProductComponent', () => {
  let component: ModalAddEditProductComponent;
  let fixture: ComponentFixture<ModalAddEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEditProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
