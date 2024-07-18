import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsclientparticulierComponent } from './tabsclientparticulier.component';

describe('TabsclientparticulierComponent', () => {
  let component: TabsclientparticulierComponent;
  let fixture: ComponentFixture<TabsclientparticulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsclientparticulierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsclientparticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
