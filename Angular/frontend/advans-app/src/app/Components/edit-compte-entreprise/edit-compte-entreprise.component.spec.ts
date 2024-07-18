import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompteEntrepriseComponent } from './edit-compte-entreprise.component';

describe('EditCompteEntrepriseComponent', () => {
  let component: EditCompteEntrepriseComponent;
  let fixture: ComponentFixture<EditCompteEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCompteEntrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCompteEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
