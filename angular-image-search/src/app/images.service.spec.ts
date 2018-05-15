import { TestBed, inject } from '@angular/core/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagesService]
    });
  });

  it('should be created', inject([ImagesService], (service: ImagesService) => {
    expect(service).toBeTruthy();
  }));
});
