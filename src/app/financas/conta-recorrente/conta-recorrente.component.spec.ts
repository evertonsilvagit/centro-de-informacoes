import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaRecorrenteComponent } from './conta-recorrente.component';

describe('TreinoComponent', () => {
  let component: ContaRecorrenteComponent;
  let fixture: ComponentFixture<ContaRecorrenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaCorrenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaCorrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
