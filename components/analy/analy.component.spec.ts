import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyComponent } from './analy.component';

describe('AnalyComponent', () => {
  let component: AnalyComponent;
  let fixture: ComponentFixture<AnalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
