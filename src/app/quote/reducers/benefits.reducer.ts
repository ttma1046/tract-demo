import { Action } from '@ngrx/store';
import { BenefitsActions, BenefitsActionTypes } from '../actions/benefits.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: BenefitsActions): State {
  switch (action.type) {

    case BenefitsActionTypes.LoadBenefitss:
      return state;


    default:
      return state;
  }
}
