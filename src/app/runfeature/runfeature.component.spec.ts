import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunfeatureComponent } from './runfeature.component';

describe('RunfeatureComponent', () => {
  let component: RunfeatureComponent;
  let fixture: ComponentFixture<RunfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
