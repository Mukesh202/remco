import { TestBed } from '@angular/core/testing';

import { UsermodulesService } from './usermodules.service';

describe('UsermodulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsermodulesService = TestBed.get(UsermodulesService);
    expect(service).toBeTruthy();
  });
});
