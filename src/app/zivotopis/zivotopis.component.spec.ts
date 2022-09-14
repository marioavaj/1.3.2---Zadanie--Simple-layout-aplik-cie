import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZivotopisComponent } from './zivotopis.component';

describe('ZivotopisComponent', () => {
  let component: ZivotopisComponent;
  let fixture: ComponentFixture<ZivotopisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZivotopisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZivotopisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
