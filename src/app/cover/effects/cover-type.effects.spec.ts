import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CoverTypeEffects } from './cover-type.effects';

describe('CoverTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: CoverTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoverTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CoverTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
