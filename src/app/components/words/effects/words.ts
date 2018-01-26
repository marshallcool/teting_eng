import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError, mergeMap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import {
  WordsActionTypes,
  WordsActions,
  GetWordsError,
  GetWords,
  GetWordsSuccess,
  AddWordsError,
  AddWordsSuccess,
  AddWords
} from '../actions/words';

import { WordsService } from '../words.service';

@Injectable()
export class WordsEffects {
  constructor( private actions$: Actions, private wordsService: WordsService ) {
  }

  @Effect()
  getWords$ = this.actions$
    .ofType(WordsActionTypes.GetWords)
    .switchMap(action =>
      this.wordsService.getWords()
        .pipe(
          map(words => new GetWordsSuccess(words)),
          catchError((e) => of(new GetWordsError(e)))
        )
    );

  @Effect()
  addWords$: Observable<Action> = this.actions$
    .ofType(WordsActionTypes.AddWords)
    .map((action: AddWords) => action.payload)
    .mergeMap(words =>
      this.wordsService.addWords(words)
        .pipe(
          map(() => new AddWordsSuccess(words)),
          catchError((e) => of(new AddWordsError(e)))
        )
    );
}
