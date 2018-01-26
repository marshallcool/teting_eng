import { TestBed, async } from '@angular/core/testing';

import { words } from './words';
import * as fromWords from './words';
import { GetWords, AddWords } from '../actions/words';

describe('WordsReducer', () => {
  const word1 = { word: 'heelo', transfer: 'привет' };
  const word2 = { word: 'heelo2', transfer: 'привет2' };
  const word3 = { word: 'heelo3', transfer: 'привет3' };

  const initialState: fromWords.State = {
    data: [word1, word2, word3],
    pending: false,
    error: null,
    success: false
  };

  const initialStateClear: fromWords.State = {
    data: [],
    pending: false,
    error: null,
    success: false
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = words(undefined, {} as any);

      expect(result).toBe({}, '');
    });
  });

  describe('Get Words', () => {
    const expectedResult = {
      data: [word1],
      pending: false,
      error: null,
      success: false
    };

    it('should add a single word, if the word does not exist', () => {
      const action = new GetWords(word1);

      const result = words(initialStateClear, action);

      expect(result).toBe({}, 'add a single word');
    });

    it('should return the existing state if the words exists', () => {
      const action = new AddWords(word1);

      const result = words(expectedResult, action);

      expect(result).toBe({}, 'return the existing state');
    });
  });
});
