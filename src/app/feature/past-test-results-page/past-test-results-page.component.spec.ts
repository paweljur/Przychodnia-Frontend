import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTestResultsPageComponent } from './past-test-results-page.component';

describe('PastTestResultsPageComponent', () => {
  let component: PastTestResultsPageComponent;
  let fixture: ComponentFixture<PastTestResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PastTestResultsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTestResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
