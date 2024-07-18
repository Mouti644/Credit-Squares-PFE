import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompteBancaireEntrepriseComponent } from './edit-compte-bancaire-entreprise.component';

describe('EditCompteBancaireEntrepriseComponent', () => {
  let component: EditCompteBancaireEntrepriseComponent;
  let fixture: ComponentFixture<EditCompteBancaireEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCompteBancaireEntrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCompteBancaireEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
