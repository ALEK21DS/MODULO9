import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoLiderComponent } from './equipo-lider-component';

describe('EquipoLiderComponent', () => {
  let component: EquipoLiderComponent;
  let fixture: ComponentFixture<EquipoLiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipoLiderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipoLiderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
