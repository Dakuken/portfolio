import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurmoiComponent } from './surmoi.component';

describe('AppWebComponent', () => {
  let component: SurmoiComponent;
  let fixture: ComponentFixture<SurmoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurmoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurmoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
