import { Word, Words } from './../models/words';
import { Action } from '@ngrx/store';

export enum WordsActionTypes {
  GetWords = '[Words] Get Words',
  GetWordsSuccess = '[Words] Get Words Success',
  GetWordsError = '[Words] Get Words Error',
  AddWords = '[Words] Add Words',
  AddWordsSuccess = '[Words] Add Words Success',
  AddWordsError = '[Words] Add Words Error',
  ResetWords = '[Words] Reset Words',
}

/**
 * Add Words
 */
export class AddWords implements Action {
  readonly type = WordsActionTypes.AddWords;

  constructor(public payload: Word) {}
}

export class AddWordsSuccess implements Action {
  readonly type = WordsActionTypes.AddWordsSuccess;

  constructor(public payload: Word) {}
}

export class AddWordsError implements Action {
  readonly type = WordsActionTypes.AddWordsError;

  constructor(public payload: Word) {}
}

export class ResetWords implements Action {
  readonly type = WordsActionTypes.ResetWords;
}

/**
 * Get Words
 */
export class GetWords implements Action {
  readonly type = WordsActionTypes.GetWords;
}

export class GetWordsSuccess implements Action {
  readonly type = WordsActionTypes.GetWordsSuccess;

  constructor(public payload: Words[]) {}
}

export class GetWordsError implements Action {
  readonly type = WordsActionTypes.GetWordsError;

  constructor(public payload: any) {}
}

export type WordsActions =
  | AddWords
  | AddWordsSuccess
  | AddWordsError
  | GetWords
  | GetWordsSuccess
  | ResetWords
  | GetWordsError;
