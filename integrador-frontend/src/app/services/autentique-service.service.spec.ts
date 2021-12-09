import { TestBed } from '@angular/core/testing';

import { AutentiqueServiceService } from './autentique-service.service';

describe('AutentiqueServiceService', () => {
  let service: AutentiqueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentiqueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
