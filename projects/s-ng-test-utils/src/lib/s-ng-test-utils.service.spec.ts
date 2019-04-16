import { TestBed } from '@angular/core/testing';

import { SNgTestUtilsService } from './s-ng-test-utils.service';

describe('SNgTestUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SNgTestUtilsService = TestBed.get(SNgTestUtilsService);
    expect(service).toBeTruthy();
  });
});
