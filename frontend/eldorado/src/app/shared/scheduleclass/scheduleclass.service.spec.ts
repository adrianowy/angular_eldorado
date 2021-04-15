import { TestBed } from '@angular/core/testing';

import { ScheduleclassService } from './scheduleclass.service';

describe('ScheduleclassService', () => {
  let service: ScheduleclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
