import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterDecideurComiteComponent } from './inter-decideur-comite.component';

describe('InterDecideurComiteComponent', () => {
  let component: InterDecideurComiteComponent;
  let fixture: ComponentFixture<InterDecideurComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterDecideurComiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterDecideurComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
