import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterDecideurComiteComponent } from './edit-inter-decideur-comite.component';

describe('EditInterDecideurComiteComponent', () => {
  let component: EditInterDecideurComiteComponent;
  let fixture: ComponentFixture<EditInterDecideurComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInterDecideurComiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInterDecideurComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
