import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grupal } from './grupal';

describe('Grupal', () => {
  let component: Grupal;
  let fixture: ComponentFixture<Grupal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grupal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grupal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
