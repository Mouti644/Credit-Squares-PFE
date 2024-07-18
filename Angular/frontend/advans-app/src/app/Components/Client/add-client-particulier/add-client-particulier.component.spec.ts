import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientParticulierComponent } from './add-client-particulier.component';

describe('AddClientParticulierComponent', () => {
  let component: AddClientParticulierComponent;
  let fixture: ComponentFixture<AddClientParticulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddClientParticulierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClientParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
