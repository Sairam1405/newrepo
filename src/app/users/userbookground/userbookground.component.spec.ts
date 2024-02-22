import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookgroundComponent } from './userbookground.component';

describe('UserbookgroundComponent', () => {
  let component: UserbookgroundComponent;
  let fixture: ComponentFixture<UserbookgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserbookgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserbookgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
