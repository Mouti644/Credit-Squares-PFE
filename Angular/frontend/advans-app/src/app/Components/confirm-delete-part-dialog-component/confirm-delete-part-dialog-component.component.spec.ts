import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePartDialogComponentComponent } from './confirm-delete-part-dialog-component.component';

describe('ConfirmDeletePartDialogComponentComponent', () => {
  let component: ConfirmDeletePartDialogComponentComponent;
  let fixture: ComponentFixture<ConfirmDeletePartDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeletePartDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmDeletePartDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
