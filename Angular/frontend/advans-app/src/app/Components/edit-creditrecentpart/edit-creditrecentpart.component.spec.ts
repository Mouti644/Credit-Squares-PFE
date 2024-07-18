import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreditrecentpartComponent } from './edit-creditrecentpart.component';

describe('EditCreditrecentpartComponent', () => {
  let component: EditCreditrecentpartComponent;
  let fixture: ComponentFixture<EditCreditrecentpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCreditrecentpartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCreditrecentpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
