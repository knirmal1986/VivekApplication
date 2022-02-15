import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostExComponent } from './http-post-ex.component';

describe('HttpPostExComponent', () => {
  let component: HttpPostExComponent;
  let fixture: ComponentFixture<HttpPostExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
