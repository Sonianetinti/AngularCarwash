import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpackageComponent } from './carpackage.component';

describe('CarpackageComponent', () => {
  let component: CarpackageComponent;
  let fixture: ComponentFixture<CarpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
