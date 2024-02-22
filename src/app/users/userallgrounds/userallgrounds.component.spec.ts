import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserallgroundsComponent } from './userallgrounds.component';

describe('UserallgroundsComponent', () => {
  let component: UserallgroundsComponent;
  let fixture: ComponentFixture<UserallgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserallgroundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserallgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
