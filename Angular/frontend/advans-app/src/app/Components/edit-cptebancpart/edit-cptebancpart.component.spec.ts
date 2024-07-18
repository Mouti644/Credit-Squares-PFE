import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCptebancpartComponent } from './edit-cptebancpart.component';

describe('EditCptebancpartComponent', () => {
  let component: EditCptebancpartComponent;
  let fixture: ComponentFixture<EditCptebancpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCptebancpartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCptebancpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
