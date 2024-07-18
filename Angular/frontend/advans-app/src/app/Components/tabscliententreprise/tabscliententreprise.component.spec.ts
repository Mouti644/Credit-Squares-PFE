import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabscliententrepriseComponent } from './tabscliententreprise.component';

describe('TabscliententrepriseComponent', () => {
  let component: TabscliententrepriseComponent;
  let fixture: ComponentFixture<TabscliententrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabscliententrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabscliententrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
