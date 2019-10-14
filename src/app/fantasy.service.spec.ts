import { TestBed } from '@angular/core/testing';

import { FantasyService } from './fantasy.service';

describe('FantasyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FantasyService = TestBed.get(FantasyService);
    expect(service).toBeTruthy();
  });
});
