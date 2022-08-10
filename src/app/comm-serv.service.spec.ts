import { TestBed } from '@angular/core/testing';

import { CommServService } from './comm-serv.service';

describe('CommServService', () => {
  let service: CommServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
