import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientEntrepriseComponent } from './edit-client-entreprise.component';

describe('EditClientEntrepriseComponent', () => {
  let component: EditClientEntrepriseComponent;
  let fixture: ComponentFixture<EditClientEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditClientEntrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditClientEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
