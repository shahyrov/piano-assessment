import { Action } from 'redux';
import { IAnswersState } from '../models';
import {
  PostAction,
  GET_ANSWERS,
  GET_ANSWERS_SUCCESS,
  GET_ANSWERS_FAILURE,
} from '../actions';

export const answersInitialState: IAnswersState = {
  items: [],
  isAnswersLoading: false
};

export function answersReducer(state = answersInitialState, a: Action): IAnswersState {
  const action = a as PostAction;
  switch (action.type) {
    case GET_ANSWERS: {
      return {
        ...state,
        isAnswersLoading: true
      };
    }
    case GET_ANSWERS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        isAnswersLoading: false
      };
    }
    case GET_ANSWERS_FAILURE: {
      return {
        ...state,
        isAnswersLoading: false
      };
    }
    default: {
      return state;
    }
  }
}
