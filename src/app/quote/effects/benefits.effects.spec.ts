import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BenefitsEffects } from './benefits.effects';

describe('BenefitsEffects', () => {
  let actions$: Observable<any>;
  let effects: BenefitsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BenefitsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BenefitsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
