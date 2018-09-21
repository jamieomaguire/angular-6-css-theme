import { TestBed } from '@angular/core/testing';

import { BrandThemeService } from './brand-theme.service';

describe('BrandThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandThemeService = TestBed.get(BrandThemeService);
    expect(service).toBeTruthy();
  });
});
