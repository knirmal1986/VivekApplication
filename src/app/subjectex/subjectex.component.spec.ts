import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectexComponent } from './subjectex.component';

describe('SubjectexComponent', () => {
  let component: SubjectexComponent;
  let fixture: ComponentFixture<SubjectexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
