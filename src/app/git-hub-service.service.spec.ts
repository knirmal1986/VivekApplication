import { TestBed } from '@angular/core/testing';

import { GitHubServiceService } from './git-hub-service.service';

describe('GitHubServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubServiceService = TestBed.get(GitHubServiceService);
    expect(service).toBeTruthy();
  });
});
