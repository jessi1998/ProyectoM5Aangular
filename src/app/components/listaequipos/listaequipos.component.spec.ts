import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaequiposComponent } from './listaequipos.component';

describe('ListaequiposComponent', () => {
  let component: ListaequiposComponent;
  let fixture: ComponentFixture<ListaequiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaequiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
