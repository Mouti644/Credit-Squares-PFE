import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCptepartComponent } from './edit-cptepart.component';

describe('EditCptepartComponent', () => {
  let component: EditCptepartComponent;
  let fixture: ComponentFixture<EditCptepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCptepartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCptepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
