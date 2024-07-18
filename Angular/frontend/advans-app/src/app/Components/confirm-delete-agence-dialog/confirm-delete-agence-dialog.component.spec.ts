import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteAgenceDialogComponent } from './confirm-delete-agence-dialog.component';

describe('ConfirmDeleteAgenceDialogComponent', () => {
  let component: ConfirmDeleteAgenceDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteAgenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteAgenceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmDeleteAgenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
