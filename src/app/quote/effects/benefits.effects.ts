import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BenefitsActionTypes } from '../actions/benefits.actions';

@Injectable()
export class BenefitsEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(BenefitsActionTypes.LoadBenefitss));

  constructor(private actions$: Actions) {}
}
