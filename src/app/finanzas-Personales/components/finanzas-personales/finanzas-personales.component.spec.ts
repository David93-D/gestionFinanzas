import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasPersonalesComponent } from './finanzas-personales.component';

describe('FinanzasPersonalesComponent', () => {
  let component: FinanzasPersonalesComponent;
  let fixture: ComponentFixture<FinanzasPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanzasPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanzasPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
