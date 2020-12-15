import { IAnswersState, IAuthorState, IPostsState } from '../posts/models';

export interface IAppState {
  search?: IPostsState;
  author?: IAuthorState;
  answers?: IAnswersState;
}
