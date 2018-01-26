
import {
  WordsActionTypes,
  WordsActions
} from '../actions/words';

export interface State {
  data: any;
  pending: boolean;
  error: string;
  success: boolean;
}

const initialState: State = {
  data: [],
  pending: false,
  error: null,
  success: false
};

export function words(state = initialState, action: WordsActions): State {
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


