import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientsParticuliersComponent } from './list-clients-particuliers.component';

describe('ListClientsParticuliersComponent', () => {
  let component: ListClientsParticuliersComponent;
  let fixture: ComponentFixture<ListClientsParticuliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListClientsParticuliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListClientsParticuliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
