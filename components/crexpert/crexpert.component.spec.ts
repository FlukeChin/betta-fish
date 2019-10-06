import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrexpertComponent } from './crexpert.component';

describe('CrexpertComponent', () => {
  let component: CrexpertComponent;
  let fixture: ComponentFixture<CrexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
