import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsProcessusComponent } from './informations-processus.component';

describe('InformationsProcessusComponent', () => {
  let component: InformationsProcessusComponent;
  let fixture: ComponentFixture<InformationsProcessusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationsProcessusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationsProcessusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
