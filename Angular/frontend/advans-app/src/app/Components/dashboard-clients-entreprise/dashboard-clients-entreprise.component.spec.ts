import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientsEntrepriseComponent } from './dashboard-clients-entreprise.component';

describe('DashboardClientsEntrepriseComponent', () => {
  let component: DashboardClientsEntrepriseComponent;
  let fixture: ComponentFixture<DashboardClientsEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardClientsEntrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardClientsEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
