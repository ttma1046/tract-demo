import { Action } from '@ngrx/store';
import { CoverTypeActions, CoverTypeActionTypes } from '../actions/cover-type.actions';
import { CoverType } from '../models/cover-type.model';
export interface State {
    loaded: boolean;
    loading: boolean;
    coverTypes: { [id: string]: CoverType }
}

export const initialState: State = {
    loaded: false,
    loading: false,
    coverTypes: {}
};

export function reducer(state = initialState, action: CoverTypeActions): State {
    switch (action.type) {

        case CoverTypeActionTypes.LoadCoverTypes: {
            return {
                ...state,
                loading: true
            }
        }
        case CoverTypeActionTypes.LoadCoverTypesSuccess: {
            const coverTypesBackend = action.payload;
            const coverTypes = coverTypesBackend.reduce(
                (coverTypes: { [id: number]: CoverType }, coverType: CoverType) => {
                    return {
                        ...coverTypes,
                        [coverType.coverTypeId]: coverType
                    }
                },
                {
                    ...state.coverTypes
                }
            );
            return {
                ...state,
                loading: false,
                loaded: true,
                coverTypes
            }
        }
        case CoverTypeActionTypes.LoadCoverTypesFail: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
        default: {
            return state;
        }
    }
}


