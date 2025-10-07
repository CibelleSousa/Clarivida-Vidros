import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDeCorteComponent } from './plano-de-corte';

describe('PlanoDeCorte', () => {
  let component: PlanoDeCorteComponent;
  let fixture: ComponentFixture<PlanoDeCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoDeCorteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoDeCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
