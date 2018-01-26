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
  wordsData: any;
  wordsNumber: any;
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
          map(() => {
            this.wordsData = words;
            for (let i = 0; i < this.wordsData.length; i++) {
              this.wordsNumber = this.getRandomArbitrary(0, 19);
              this.wordsData[i].words = [
                {
                  number: this.wordsData[this.wordsNumber[0][1]].transfer
                },
                {
                  number: this.wordsData[this.wordsNumber[1][2]].transfer
                },
                {
                  number: this.wordsData[this.wordsNumber[2][3]].transfer
                },
                {
                  number: this.wordsData[this.wordsNumber[3][4]].transfer
                },
                {
                  number: this.wordsData[this.wordsNumber[4][5]].transfer
                },
                {
                  number: this.wordsData[i].transfer
                }
              ];
            }
            return new AddWordsSuccess(words);
          }),
          catchError((e) => of(new AddWordsError(e)))
        )
    );
}
