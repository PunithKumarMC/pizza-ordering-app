import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepizzaTocartComponent } from './updatepizza-tocart.component';

describe('UpdatepizzaTocartComponent', () => {
  let component: UpdatepizzaTocartComponent;
  let fixture: ComponentFixture<UpdatepizzaTocartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepizzaTocartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepizzaTocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
