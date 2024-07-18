import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteManagementComponent } from './visite-management.component';

describe('VisiteManagementComponent', () => {
  let component: VisiteManagementComponent;
  let fixture: ComponentFixture<VisiteManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisiteManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisiteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
