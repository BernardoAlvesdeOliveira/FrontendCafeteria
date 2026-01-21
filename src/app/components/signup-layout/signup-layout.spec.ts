import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpLayout } from './signup-layout';

describe('SingupLayout', () => {
  let component: SignUpLayout;
  let fixture: ComponentFixture<SignUpLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
