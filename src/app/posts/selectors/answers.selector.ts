import { createSelector } from '@ngrx/store';
import { IAnswersState } from '../models';
import { IAppState } from '../../store';

export const selectAnswers = (state: IAppState) => state.answers;

export const getAnswersSelector = createSelector(
  selectAnswers,
  (state: IAnswersState) => state && state.items
);

export const isAnswersLoadingSelector = createSelector(
  selectAnswers,
  (state: IAnswersState) => state && state.isAnswersLoading
);
