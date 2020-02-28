import { TestBed } from '@angular/core/testing';

import { EmartService } from './e-mart.service';

describe('EMartService', () => {
  let service: EmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
