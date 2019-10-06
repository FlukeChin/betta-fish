import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexpertComponent } from './editexpert.component';

describe('EditexpertComponent', () => {
  let component: EditexpertComponent;
  let fixture: ComponentFixture<EditexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
