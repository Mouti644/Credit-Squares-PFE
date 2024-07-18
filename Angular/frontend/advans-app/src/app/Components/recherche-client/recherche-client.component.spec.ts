import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheClientComponent } from './recherche-client.component';

describe('RechercheClientComponent', () => {
  let component: RechercheClientComponent;
  let fixture: ComponentFixture<RechercheClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
