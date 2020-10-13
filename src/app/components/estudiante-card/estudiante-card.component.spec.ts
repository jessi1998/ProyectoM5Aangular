import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteCardComponent } from './estudiante-card.component';

describe('EstudianteCardComponent', () => {
  let component: EstudianteCardComponent;
  let fixture: ComponentFixture<EstudianteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
