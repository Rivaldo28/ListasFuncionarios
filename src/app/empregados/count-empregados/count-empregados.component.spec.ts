import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmpregadosComponent } from './count-empregados.component';

describe('CountEmpregadosComponent', () => {
  let component: CountEmpregadosComponent;
  let fixture: ComponentFixture<CountEmpregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountEmpregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEmpregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
