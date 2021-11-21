import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermodulesComponent } from './usermodules.component';

describe('UsermodulesComponent', () => {
  let component: UsermodulesComponent;
  let fixture: ComponentFixture<UsermodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
