import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrasstypepageComponent } from './grasstypepage.component';

describe('GrasstypepageComponent', () => {
  let component: GrasstypepageComponent;
  let fixture: ComponentFixture<GrasstypepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrasstypepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrasstypepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
