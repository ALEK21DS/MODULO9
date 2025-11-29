import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroEquipoComponent } from './miembro-equipo-component';

describe('MiembroEquipoComponent', () => {
  let component: MiembroEquipoComponent;
  let fixture: ComponentFixture<MiembroEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiembroEquipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiembroEquipoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
