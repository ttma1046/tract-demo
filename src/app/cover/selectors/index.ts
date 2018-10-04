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

export const selectProjectValues = createSelector(
	selectFoo,
	selectBar,
	(foo, bar) => {
		if (foo && bar) {
			return { foo, bar };
		}

		return undefined;
	});

export const selectLastStateTransitions =
	(coun: number) => 
	pipe(
	select(selectProjectedValues),
	scan((acc, curr) => {
		return [ curr, acc[0], acc[1]].filter(val => val!= undefined);
	} [] as { foo: number; bar: string } [])
     );

store.pipe(selectLastStateTransitions(3)).subscribe(/* .. */); 
