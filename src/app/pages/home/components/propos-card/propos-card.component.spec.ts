import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposCardComponent } from './propos-card.component';

describe('ProposCardComponent', () => {
  let component: ProposCardComponent;
  let fixture: ComponentFixture<ProposCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
