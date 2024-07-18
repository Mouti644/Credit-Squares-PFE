import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReffamilComponent } from './edit-reffamil.component';

describe('EditReffamilComponent', () => {
  let component: EditReffamilComponent;
  let fixture: ComponentFixture<EditReffamilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditReffamilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditReffamilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
