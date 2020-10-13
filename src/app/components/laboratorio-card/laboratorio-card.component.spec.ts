import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioCardComponent } from './laboratorio-card.component';

describe('LaboratorioCardComponent', () => {
  let component: LaboratorioCardComponent;
  let fixture: ComponentFixture<LaboratorioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorioCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
