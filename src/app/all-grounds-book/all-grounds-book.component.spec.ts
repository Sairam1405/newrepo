import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGroundsBookComponent } from './all-grounds-book.component';

describe('AllGroundsBookComponent', () => {
  let component: AllGroundsBookComponent;
  let fixture: ComponentFixture<AllGroundsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllGroundsBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllGroundsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
