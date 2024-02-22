import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlocationsComponent } from './userlocations.component';

describe('UserlocationsComponent', () => {
  let component: UserlocationsComponent;
  let fixture: ComponentFixture<UserlocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserlocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
