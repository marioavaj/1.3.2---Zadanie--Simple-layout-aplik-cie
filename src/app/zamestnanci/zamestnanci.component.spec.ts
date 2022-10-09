import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamestnanciComponent } from './zamestnanci.component';

describe('ZamestnanciComponent', () => {
  let component: ZamestnanciComponent;
  let fixture: ComponentFixture<ZamestnanciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZamestnanciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZamestnanciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
