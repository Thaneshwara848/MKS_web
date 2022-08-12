import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lch1Component } from './lch1.component';

describe('Lch1Component', () => {
  let component: Lch1Component;
  let fixture: ComponentFixture<Lch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
