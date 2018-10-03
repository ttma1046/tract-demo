import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBenefits from './reducers/benefits.reducer';
import * as fromBenefits from '../reducers/benefits.reducer';

export interface QuotesState {
    benefits: fromBenefits.BenefitState;    benefits: fromBenefits.State;

}
export const reducers: ActionReducerMap<QuotesState> = {
    benefits: fromBenefits.reducer
    benefits: fromBenefits.reducer,
}