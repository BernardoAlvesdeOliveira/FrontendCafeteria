import { TestBed } from '@angular/core/testing';

import { EnviandoInfomacoes } from './enviando-infomacoes';

describe('EnviandoInfomacoes', () => {
  let service: EnviandoInfomacoes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviandoInfomacoes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
