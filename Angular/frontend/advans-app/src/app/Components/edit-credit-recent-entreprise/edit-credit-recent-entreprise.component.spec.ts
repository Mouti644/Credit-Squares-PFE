import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreditRecentEntrepriseComponent } from './edit-credit-recent-entreprise.component';

describe('EditCreditRecentEntrepriseComponent', () => {
  let component: EditCreditRecentEntrepriseComponent;
  let fixture: ComponentFixture<EditCreditRecentEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCreditRecentEntrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCreditRecentEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
