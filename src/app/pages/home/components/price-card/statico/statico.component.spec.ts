import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticoComponent } from './statico.component';

describe('StaticoComponent', () => {
  let component: StaticoComponent;
  let fixture: ComponentFixture<StaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
