import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingPostComponent } from './adding-post.component';

describe('AddingPostComponent', () => {
  let component: AddingPostComponent;
  let fixture: ComponentFixture<AddingPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
