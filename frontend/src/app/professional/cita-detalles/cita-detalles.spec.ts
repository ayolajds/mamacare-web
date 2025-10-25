import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaDetalles } from './cita-detalles';

describe('CitaDetalles', () => {
  let component: CitaDetalles;
  let fixture: ComponentFixture<CitaDetalles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaDetalles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaDetalles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
