import { TestBed, inject } from '@angular/core/testing';

import { FeatureserviceService } from './featureservice.service';

describe('FeatureserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureserviceService]
    });
  });

  it('should be created', inject([FeatureserviceService], (service: FeatureserviceService) => {
    expect(service).toBeTruthy();
  }));
});
