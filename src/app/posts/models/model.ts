import { AnswerDto, AuthorDto, PostsDto } from './dto';

export interface IPostsState {
  items: PostsDto;
  searchTerm: string;
  isLoading: boolean;
}

export interface IAuthorState {
  questions: AuthorDto;
  authorId: number;
  questionId: number;
  isQuestionsLoading: boolean;
}

export interface IAnswersState {
  items: ReadonlyArray<AnswerDto>;
  isAnswersLoading: boolean;
}
