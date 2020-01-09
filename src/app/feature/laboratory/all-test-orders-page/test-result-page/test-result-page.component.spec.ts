import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResultPageComponent } from './test-result-page.component';

describe('TestResultPageComponent', () => {
  let component: TestResultPageComponent;
  let fixture: ComponentFixture<TestResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestResultPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
