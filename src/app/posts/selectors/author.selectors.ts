import { createSelector } from '@ngrx/store';
import { IAuthorState, IPostsState, Post } from '../models';
import { IAppState } from '../../store';
import { selectPosts } from './post.selectors';

export const selectAuthor = (state: IAppState) => state.author;

export const getQuestionsSelector = createSelector(
  selectAuthor,
  (state: IAuthorState) => state && state.questions
);

export const isQuestionsLoadingSelector = createSelector(
  selectAuthor,
  (state: IAuthorState) => state && state.isQuestionsLoading
);

export const questionByIdSelector = createSelector(
  selectAuthor,
  selectPosts,
  (state: IAuthorState, postState: IPostsState) => {
    return postState.items.find((post: Post) => post.question_id === state.questionId);
  }
);
