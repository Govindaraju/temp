import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplefeatureComponent } from './simplefeature.component';

describe('SimplefeatureComponent', () => {
  let component: SimplefeatureComponent;
  let fixture: ComponentFixture<SimplefeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplefeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplefeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
