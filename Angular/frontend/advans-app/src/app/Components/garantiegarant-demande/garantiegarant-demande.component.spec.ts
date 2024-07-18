import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiegarantDemandeComponent } from './garantiegarant-demande.component';

describe('GarantiegarantDemandeComponent', () => {
  let component: GarantiegarantDemandeComponent;
  let fixture: ComponentFixture<GarantiegarantDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GarantiegarantDemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarantiegarantDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
