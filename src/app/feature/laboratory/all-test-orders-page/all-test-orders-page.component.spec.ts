import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestOrdersPageComponent } from './all-test-orders-page.component';

describe('AllTestOrdersComponent', () => {
  let component: AllTestOrdersPageComponent;
  let fixture: ComponentFixture<AllTestOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllTestOrdersPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
