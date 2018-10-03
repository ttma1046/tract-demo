import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCoverType from '../reducers/cover-type.reducer';

export interface State {

  coverType: fromCoverType.State;
}

export const reducers: ActionReducerMap<State> = {

  coverType: fromCoverType.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
