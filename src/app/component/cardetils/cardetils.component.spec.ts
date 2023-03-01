import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardetilsComponent } from './cardetils.component';

describe('CardetilsComponent', () => {
  let component: CardetilsComponent;
  let fixture: ComponentFixture<CardetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardetilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
