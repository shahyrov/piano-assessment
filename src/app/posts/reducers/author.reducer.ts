import { Action } from 'redux';
import { AuthorDto, IAuthorState } from '../models';
import {
  GET_AUTHOR_QUESTIONS,
  GET_AUTHOR_QUESTIONS_FAILURE,
  GET_AUTHOR_QUESTIONS_SUCCESS,
  PostAction,
  SET_QUESTIONS_ID,
} from '../actions';

export const authorInitialState: IAuthorState = {
  questions: {} as AuthorDto,
  authorId: undefined,
  questionId: undefined,
  isQuestionsLoading: false
};

export function authorReducer(state = authorInitialState, a: Action): IAuthorState {
  const action = a as PostAction;
  switch (action.type) {
    case GET_AUTHOR_QUESTIONS: {
      return {
        ...state,
        authorId: action.payload,
        isQuestionsLoading: true
      };
    }
    case GET_AUTHOR_QUESTIONS_SUCCESS: {
      return {
        ...state,
        questions: action.payload,
        isQuestionsLoading: false
      };
    }
    case GET_AUTHOR_QUESTIONS_FAILURE: {
      return {
        ...state,
        authorId: undefined,
        isQuestionsLoading: false
      };
    }
    case SET_QUESTIONS_ID: {
      return {
        ...state,
        questionId: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
