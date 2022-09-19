import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollIconComponent } from './scroll-icon.component';

describe('ScrollIconComponent', () => {
  let component: ScrollIconComponent;
  let fixture: ComponentFixture<ScrollIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
