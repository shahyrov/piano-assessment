import { createSelector } from '@ngrx/store';
import { IPostsState} from '../models';
import { IAppState } from '../../store';

export const selectPosts = (state: IAppState) => state.search;

export const getPostsSelector = createSelector(
  selectPosts,
  (state: IPostsState) => state && state.items
);

export const isLoadingSelector = createSelector(
  selectPosts,
  (state: IPostsState) => state && state.isLoading
);

export const searchTermSelector = createSelector(
  selectPosts,
  (state: IPostsState) => state && state.searchTerm
);
