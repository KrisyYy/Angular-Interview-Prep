import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditPageComponent } from './create-edit-page.component';

describe('CreateEditPageComponent', () => {
  let component: CreateEditPageComponent;
  let fixture: ComponentFixture<CreateEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditPageComponent]
    });
    fixture = TestBed.createComponent(CreateEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
