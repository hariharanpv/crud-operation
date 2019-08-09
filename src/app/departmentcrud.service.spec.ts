import { TestBed } from '@angular/core/testing';

import { DepartmentcrudService } from './departmentcrud.service';

describe('DepartmentcrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentcrudService = TestBed.get(DepartmentcrudService);
    expect(service).toBeTruthy();
  });
});
