/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryDataService } from './category-data.service';

describe('CategoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryDataService]
    });
  });

  it('should ...', inject([CategoryDataService], (service: CategoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
