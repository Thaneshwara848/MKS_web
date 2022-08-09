import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrtypageComponent } from './enrtypage.component';

describe('EnrtypageComponent', () => {
  let component: EnrtypageComponent;
  let fixture: ComponentFixture<EnrtypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrtypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrtypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
