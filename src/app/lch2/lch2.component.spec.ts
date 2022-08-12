import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lch2Component } from './lch2.component';

describe('Lch2Component', () => {
  let component: Lch2Component;
  let fixture: ComponentFixture<Lch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lch2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
