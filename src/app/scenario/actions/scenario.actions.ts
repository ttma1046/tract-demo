import { Action } from '@ngrx/store';

export enum ScenarioActionTypes {
  LoadScenarios = '[Scenario] Load Scenarios'
}

export class LoadScenarios implements Action {
  readonly type = ScenarioActionTypes.LoadScenarios;
}

export type ScenarioActions = LoadScenarios;
