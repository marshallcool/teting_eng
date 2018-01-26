import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError, mergeMap } from 'rxjs/operators';
// import {
//   GET_WORDS,
//   GET_WORDSS_SUCCESS,
//   GET_WORDSS_ERROR,
//   ADD_WORDS,
//   ADD_WORDS_SUCCESS,
//   ADD_WORDS_ERROR
// } from '../reducers/words';
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
  test: any;
  testnumber: any;
  constructor( private actions$: Actions, private wordsService: WordsService ) {
  }

  getRandomArbitrary(min, max) {
    return [
      {1: Math.round(Math.random() * (max - min) + min)},
      {2: Math.round(Math.random() * (max - min) + min)},
      {3: Math.round(Math.random() * (max - min) + min)},
      {4: Math.round(Math.random() * (max - min) + min)},
      {5: Math.round(Math.random() * (max - min) + min)}
    ];
  }

  @Effect()
  getWords$ = this.actions$
    .ofType(WordsActionTypes.GetWords)
    .switchMap(action =>
      this.wordsService.getWords()
        .pipe(
          map(themes => new GetWordsSuccess(themes)),
          catchError((e) => of(new GetWordsError(e)))
        )
    );

  @Effect()
  addWords$: Observable<Action> = this.actions$
    .ofType(WordsActionTypes.AddWords)
    .map((action: AddWords) => action.payload)
    .mergeMap(contact =>
      this.wordsService.addWords(contact)
        .pipe(
          map(() => {
            this.test = contact;
            for (let i = 0; i < this.test.length; i++) {
              this.testnumber = this.getRandomArbitrary(0, 19);
              this.test[i].words = [
                {
                  number: this.test[this.testnumber[0][1]].transfer
                },
                {
                  number: this.test[this.testnumber[1][2]].transfer
                },
                {
                  number: this.test[this.testnumber[2][3]].transfer
                },
                {
                  number: this.test[this.testnumber[3][4]].transfer
                },
                {
                  number: this.test[this.testnumber[4][5]].transfer
                },
                {
                  number: this.test[i].transfer
                }
              ];
            }
            return new AddWordsSuccess(contact);
          }),
          catchError((e) => of(new AddWordsError(e)))
        )
    );
}
