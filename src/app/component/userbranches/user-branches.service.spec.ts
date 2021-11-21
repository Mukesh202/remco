import { TestBed } from '@angular/core/testing';

import { UserBranchesService } from './user-branches.service';

describe('UserBranchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBranchesService = TestBed.get(UserBranchesService);
    expect(service).toBeTruthy();
  });
});
