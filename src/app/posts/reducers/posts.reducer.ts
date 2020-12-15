import { Action } from 'redux';
import { IPostsState } from '../models';
import {
  PostAction,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CLEAR_SEARCH_TERM
} from '../actions';

export const postsInitialState: IPostsState = {
  items: [],
  searchTerm: undefined,
  isLoading: false
};

export function postsReducer(state = postsInitialState, a: Action): IPostsState {
  const action = a as PostAction;
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        searchTerm: action.payload,
        isLoading: true
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    case GET_POSTS_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }
    case CLEAR_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: undefined
      };
    }
    default: {
      return state;
    }
  }
}
