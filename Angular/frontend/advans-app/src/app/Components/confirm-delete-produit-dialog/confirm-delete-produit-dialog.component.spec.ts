import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteProduitDialogComponent } from './confirm-delete-produit-dialog.component';

describe('ConfirmDeleteProduitDialogComponent', () => {
  let component: ConfirmDeleteProduitDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteProduitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteProduitDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmDeleteProduitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
