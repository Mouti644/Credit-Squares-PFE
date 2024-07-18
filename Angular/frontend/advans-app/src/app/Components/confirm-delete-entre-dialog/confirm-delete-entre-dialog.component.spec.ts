import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteEntreDialogComponent } from './confirm-delete-entre-dialog.component';

describe('ConfirmDeleteEntreDialogComponent', () => {
  let component: ConfirmDeleteEntreDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteEntreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteEntreDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmDeleteEntreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
