import { TestBed } from '@angular/core/testing';

import { MenuCategoriaServiceService } from './menu-categoria-service.service';

describe('MenuCategoriaServiceService', () => {
  let service: MenuCategoriaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCategoriaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
