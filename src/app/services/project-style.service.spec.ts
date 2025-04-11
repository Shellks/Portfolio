import { TestBed } from '@angular/core/testing';

import { ProjectStyleService } from './project-style.service';

describe('ProjectStyleService', () => {
  let service: ProjectStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
