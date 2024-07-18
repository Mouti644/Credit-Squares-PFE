import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsDialogComponent } from './operations-dialog.component';

describe('OperationsDialogComponent', () => {
  let component: OperationsDialogComponent;
  let fixture: ComponentFixture<OperationsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
