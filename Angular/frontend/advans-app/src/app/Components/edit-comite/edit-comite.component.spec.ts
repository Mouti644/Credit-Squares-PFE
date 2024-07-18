import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComiteComponent } from './edit-comite.component';

describe('EditComiteComponent', () => {
  let component: EditComiteComponent;
  let fixture: ComponentFixture<EditComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
