import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDialogComponentComponent } from './client-dialog-component.component';

describe('ClientDialogComponentComponent', () => {
  let component: ClientDialogComponentComponent;
  let fixture: ComponentFixture<ClientDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
