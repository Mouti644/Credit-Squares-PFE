import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepensesComponent } from './edit-depenses.component';

describe('EditDepensesComponent', () => {
  let component: EditDepensesComponent;
  let fixture: ComponentFixture<EditDepensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDepensesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
