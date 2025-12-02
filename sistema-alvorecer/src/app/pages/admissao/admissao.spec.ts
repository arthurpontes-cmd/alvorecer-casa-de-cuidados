import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admissao } from './admissao';

describe('Admissao', () => {
  let component: Admissao;
  let fixture: ComponentFixture<Admissao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admissao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admissao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
