import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSolicitudesComponent } from './actualizar-solicitudes.component';

describe('ActualizarSolicitudesComponent', () => {
  let component: ActualizarSolicitudesComponent;
  let fixture: ComponentFixture<ActualizarSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
