import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlysisComponent } from './anlysis.component';

describe('AnlysisComponent', () => {
  let component: AnlysisComponent;
  let fixture: ComponentFixture<AnlysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnlysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnlysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
