import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGarantieComponent } from './edit-garantie.component';

describe('EditGarantieComponent', () => {
  let component: EditGarantieComponent;
  let fixture: ComponentFixture<EditGarantieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditGarantieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditGarantieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
