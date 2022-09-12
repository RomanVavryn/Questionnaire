import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCreateTypeComponent } from './question-create-type.component';

describe('QuestionCreateTypeComponent', () => {
  let component: QuestionCreateTypeComponent;
  let fixture: ComponentFixture<QuestionCreateTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCreateTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCreateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
