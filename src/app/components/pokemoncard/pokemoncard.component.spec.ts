import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoncardComponent } from './pokemoncard.component';

describe('PokemoncardComponent', () => {
  let component: PokemoncardComponent;
  let fixture: ComponentFixture<PokemoncardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemoncardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemoncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
