import { Action } from '@ngrx/store';

export enum QuoteActionTypes {
  LoadQuotes = '[Quote] Load Quotes'
}

export class LoadQuotes implements Action {
  readonly type = QuoteActionTypes.LoadQuotes;
}

export type QuoteActions = LoadQuotes;
