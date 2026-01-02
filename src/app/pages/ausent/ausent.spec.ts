import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ausent } from './ausent';

describe('Ausent', () => {
  let component: Ausent;
  let fixture: ComponentFixture<Ausent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ausent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ausent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
