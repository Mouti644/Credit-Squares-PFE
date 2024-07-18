import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantgarantieDemandeComponent } from './garantgarantie-demande.component';

describe('GarantgarantieDemandeComponent', () => {
  let component: GarantgarantieDemandeComponent;
  let fixture: ComponentFixture<GarantgarantieDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GarantgarantieDemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarantgarantieDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
