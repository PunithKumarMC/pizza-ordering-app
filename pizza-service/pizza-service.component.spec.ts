import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaServiceComponent } from './pizza-service.component';

describe('PizzaServiceComponent', () => {
  let component: PizzaServiceComponent;
  let fixture: ComponentFixture<PizzaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
