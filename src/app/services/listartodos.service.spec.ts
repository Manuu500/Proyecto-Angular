import { TestBed } from '@angular/core/testing';

import { ListartodosService } from './listartodos.service';

describe('ListartodosService', () => {
  let service: ListartodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListartodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
