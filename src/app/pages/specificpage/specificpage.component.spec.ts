import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificpageComponent } from './specificpage.component';

describe('SpecificpageComponent', () => {
  let component: SpecificpageComponent;
  let fixture: ComponentFixture<SpecificpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
