import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOptionsComponent } from './create-options.component';

describe('CreateOptionsComponent', () => {
  let component: CreateOptionsComponent;
  let fixture: ComponentFixture<CreateOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
