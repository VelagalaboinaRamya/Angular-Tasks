import { TestBed } from '@angular/core/testing';

import { NewsOperationsService } from './news-operations.service';

describe('NewsOperationsService', () => {
  let service: NewsOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
