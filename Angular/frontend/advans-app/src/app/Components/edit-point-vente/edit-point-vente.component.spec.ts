import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPointVenteComponent } from './edit-point-vente.component';

describe('EditPointVenteComponent', () => {
  let component: EditPointVenteComponent;
  let fixture: ComponentFixture<EditPointVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPointVenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPointVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
