import { Action } from '@ngrx/store';
import { CoverTypeActions, CoverTypeActionTypes } from '../actions/cover-type.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: CoverTypeActions): State {
  switch (action.type) {

    case CoverTypeActionTypes.LoadCoverTypes:
      return state;


    default:
      return state;
  }
}
