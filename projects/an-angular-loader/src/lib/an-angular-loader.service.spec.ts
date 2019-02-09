import { TestBed } from '@angular/core/testing';

import { AnAngularLoaderService } from './an-angular-loader.service';

describe('AnAngularLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnAngularLoaderService = TestBed.get(AnAngularLoaderService);
    expect(service).toBeTruthy();
  });
});
