import { Action } from '@ngrx/store';
import { CoverType } from '../models/cover-type.model';

export enum CoverTypeActionTypes {
  LoadCoverTypes = '[CoverType] Load CoverTypes';
  LoadCoverTypesFail = '[CoverType] Load CoverTypes Fail';
  LoadCoverTypesSuccess = '[CoverType] Load CoverTypes Success';
}

export class LoadCoverTypes implements Action {
  readonly type = CoverTypeActionTypes.LoadCoverTypes;
}

export class LoadCoverTypesSuccess implements Action {
  readonly type = CoverTypeActionTypes.LoadCoverTypesSuccess;
  constructor(public payload: CoverType[]) {
  }
}

export class LoadCoverTypesFail implements Action {
  readonly type = CoverTypeActionTypes.LoadCoverTypesFail;
  constructor(public payload: string) {
  }
}

export type CoverTypeActions = LoadCoverTypes | LoadCoverTypesSuccess | LoadCoverTypesFail;
