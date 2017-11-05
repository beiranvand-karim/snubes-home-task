import { TestBed, inject } from '@angular/core/testing';

import { TrainsService } from './trains.service';

describe('TrainsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainsService]
    });
  });

  it('should be created', inject([TrainsService], (service: TrainsService) => {
    expect(service).toBeTruthy();
  }));
});
