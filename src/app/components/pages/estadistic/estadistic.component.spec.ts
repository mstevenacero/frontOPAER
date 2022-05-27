import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticComponent } from './estadistic.component';

describe('EstadisticComponent', () => {
  let component: EstadisticComponent;
  let fixture: ComponentFixture<EstadisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
