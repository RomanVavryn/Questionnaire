import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfQuestionsPageComponent } from './list-of-questions-page.component';

describe('ListOfQuestionsPageComponent', () => {
  let component: ListOfQuestionsPageComponent;
  let fixture: ComponentFixture<ListOfQuestionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfQuestionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
