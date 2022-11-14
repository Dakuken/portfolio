import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamoComponent } from './dynamo.component';

describe('DynamoComponent', () => {
  let component: DynamoComponent;
  let fixture: ComponentFixture<DynamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
