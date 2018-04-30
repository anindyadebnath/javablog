import { TestBed, inject } from '@angular/core/testing';

import { ConsolesizeService } from './consolesize.service';

describe('ConsolesizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsolesizeService]
    });
  });

  it('should be created', inject([ConsolesizeService], (service: ConsolesizeService) => {
    expect(service).toBeTruthy();
  }));
});
