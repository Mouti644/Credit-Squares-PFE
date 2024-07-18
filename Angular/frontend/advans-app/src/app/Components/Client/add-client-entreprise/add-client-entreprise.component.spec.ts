import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientEntrepriseComponent } from './add-client-entreprise.component';

describe('AddClientEntrepriseComponent', () => {
  let component: AddClientEntrepriseComponent;
  let fixture: ComponentFixture<AddClientEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddClientEntrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClientEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
