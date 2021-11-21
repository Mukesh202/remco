import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbranchesComponent } from './userbranches.component';

describe('UserbranchesComponent', () => {
  let component: UserbranchesComponent;
  let fixture: ComponentFixture<UserbranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
