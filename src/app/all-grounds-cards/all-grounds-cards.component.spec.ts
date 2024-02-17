import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGroundsCardsComponent } from './all-grounds-cards.component';

describe('AllGroundsCardsComponent', () => {
  let component: AllGroundsCardsComponent;
  let fixture: ComponentFixture<AllGroundsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllGroundsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllGroundsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
