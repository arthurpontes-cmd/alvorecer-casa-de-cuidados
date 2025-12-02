import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prescricao } from './prescricao';

describe('Prescricao', () => {
  let component: Prescricao;
  let fixture: ComponentFixture<Prescricao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prescricao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prescricao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
