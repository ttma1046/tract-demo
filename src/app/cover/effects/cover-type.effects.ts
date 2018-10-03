import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoverTypeActionTypes } from '../actions/cover-type.actions';

@Injectable()
export class CoverTypeEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(CoverTypeActionTypes.LoadCoverTypes));

  constructor(private actions$: Actions) {}
}
