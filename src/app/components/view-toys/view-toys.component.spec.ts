import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToysComponent } from './view-toys.component';

describe('ViewToysComponent', () => {
  let component: ViewToysComponent;
  let fixture: ComponentFixture<ViewToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
