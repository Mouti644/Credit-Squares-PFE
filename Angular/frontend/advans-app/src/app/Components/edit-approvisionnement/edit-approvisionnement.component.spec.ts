import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApprovisionnementComponent } from './edit-approvisionnement.component';

describe('EditApprovisionnementComponent', () => {
  let component: EditApprovisionnementComponent;
  let fixture: ComponentFixture<EditApprovisionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditApprovisionnementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
