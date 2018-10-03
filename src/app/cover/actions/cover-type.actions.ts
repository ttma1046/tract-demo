import { Action } from '@ngrx/store';

export enum CoverTypeActionTypes {
  LoadCoverTypes = '[CoverType] Load CoverTypes'
}

export class LoadCoverTypes implements Action {
  readonly type = CoverTypeActionTypes.LoadCoverTypes;
}

export type CoverTypeActions = LoadCoverTypes;
