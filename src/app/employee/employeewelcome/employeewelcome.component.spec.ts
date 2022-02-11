import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeewelcomeComponent } from './employeewelcome.component';

describe('EmployeewelcomeComponent', () => {
  let component: EmployeewelcomeComponent;
  let fixture: ComponentFixture<EmployeewelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeewelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeewelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
