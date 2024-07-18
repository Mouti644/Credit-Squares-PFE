import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueAnalyseComponent } from './risque-analyse.component';

describe('RisqueAnalyseComponent', () => {
  let component: RisqueAnalyseComponent;
  let fixture: ComponentFixture<RisqueAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RisqueAnalyseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RisqueAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
