import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueNovo } from './estoque-novo';

describe('EstoqueNovo', () => {
  let component: EstoqueNovo;
  let fixture: ComponentFixture<EstoqueNovo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueNovo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueNovo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
