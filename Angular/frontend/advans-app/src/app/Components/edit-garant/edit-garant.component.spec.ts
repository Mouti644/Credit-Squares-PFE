import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGarantComponent } from './edit-garant.component';

describe('EditGarantComponent', () => {
  let component: EditGarantComponent;
  let fixture: ComponentFixture<EditGarantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditGarantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditGarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
