import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportexpertComponent } from './reportexpert.component';

describe('ReportexpertComponent', () => {
  let component: ReportexpertComponent;
  let fixture: ComponentFixture<ReportexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
