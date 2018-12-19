import { TestBed } from '@angular/core/testing';

import { WorkflowGuardService } from './workflow-guard.service';

describe('WorkflowGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkflowGuardService = TestBed.get(WorkflowGuardService);
    expect(service).toBeTruthy();
  });
});
