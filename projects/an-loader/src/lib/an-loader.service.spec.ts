import { TestBed } from '@angular/core/testing';

import { AnLoaderService } from './an-loader.service';

describe('AnLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnLoaderService = TestBed.get(AnLoaderService);
    expect(service).toBeTruthy();
  });
});
