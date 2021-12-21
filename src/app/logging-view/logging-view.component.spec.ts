import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingViewComponent } from './logging-view.component';

describe('LoggingViewComponent', () => {
  let component: LoggingViewComponent;
  let fixture: ComponentFixture<LoggingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
