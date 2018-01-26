
import {
  WordsActionTypes,
  WordsActions
} from '../actions/words';

const initialState: any = {
  data: [],
  pending: false,
  error: null
};

export function contacts(state = initialState, action: WordsActions) {
  switch (action.type) {
    case WordsActionTypes.GetWords:
      return {
        ...state,
        pending: true,
        error: null
      };
    case WordsActionTypes.AddWords:
      return {
        ...state,
        pending: true,
        error: null,
        success: false
      };
    case WordsActionTypes.GetWordsSuccess:
      return {
        ...state,
        data: action.payload,
        pending: false
      };
    case WordsActionTypes.AddWordsSuccess:
      return {
        ...state,
        data: [...state.data, action.payload],
        pending: false,
        success: true
      };
    case WordsActionTypes.GetWordsError:
    case WordsActionTypes.AddWordsError:
      return {
        ...state,
        pending: false,
        error: action.payload.message
      };
    default:
      return state;
  }
}


