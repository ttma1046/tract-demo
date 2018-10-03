import { Action } from '@ngrx/store';

export enum BenefitsActionTypes {
  LoadBenefitss = '[Benefits] Load Benefitss'
}

export class LoadBenefitss implements Action {
  readonly type = BenefitsActionTypes.LoadBenefitss;
}

export type BenefitsActions = LoadBenefitss;
