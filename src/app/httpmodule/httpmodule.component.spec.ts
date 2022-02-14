import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPModuleComponent } from './httpmodule.component';

describe('HTTPModuleComponent', () => {
  let component: HTTPModuleComponent;
  let fixture: ComponentFixture<HTTPModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTTPModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
