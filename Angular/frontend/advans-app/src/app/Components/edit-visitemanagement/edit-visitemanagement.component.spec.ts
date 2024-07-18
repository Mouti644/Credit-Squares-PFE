import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisitemanagementComponent } from './edit-visitemanagement.component';

describe('EditVisitemanagementComponent', () => {
  let component: EditVisitemanagementComponent;
  let fixture: ComponentFixture<EditVisitemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditVisitemanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVisitemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
