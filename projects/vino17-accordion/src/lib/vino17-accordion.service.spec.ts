import { TestBed } from '@angular/core/testing';

import { Vino17AccordionService } from './vino17-accordion.service';

describe('Vino17AccordionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Vino17AccordionService = TestBed.get(Vino17AccordionService);
    expect(service).toBeTruthy();
  });
});
