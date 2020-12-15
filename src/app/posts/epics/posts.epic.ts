import { Injectable } from '@angular/core';
import { combineEpics, ofType } from 'redux-observable';
import 'rxjs/add/operator/map';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  AnswersActions,
  AuthorActions,
  GET_ANSWERS,
  GET_AUTHOR_QUESTIONS,
  GET_POSTS, PostAction,
  PostActions,
  AuthorAction,
  AnswerAction
} from '../actions';
import { AuthorDto, PostsDto } from '../models';
import { PostsService } from '../services';

@Injectable()
export class PostsEpic {
  constructor(private postsService: PostsService,
              private postActions: PostActions,
              private router: Router,
              private authorActions: AuthorActions,
              private answerActions: AnswersActions) {
  }

  public createEpic() {
    return combineEpics(
      getPostsEpic(this.postsService, this.postActions, this.router),
      getAuthorQuestionsEpic(this.postsService, this.authorActions),
      getAnswersEpic(this.postsService, this.answerActions)
    );
  }
}

export function getPostsEpic(postsService: PostsService, postActions: PostActions, router: Router) {
  return action$ => action$.pipe(
    ofType(GET_POSTS),
    switchMap((action: PostAction) => {
      return postsService.searchForPosts(action.payload)
        .map((data: {items: PostsDto}) => {
          router.navigateByUrl('result');
          return postActions.getPostsSucceeded(data.items);
        }, error => {
          return postActions.getPostsFailed(error);
        });
    })
  );
}

export function getAuthorQuestionsEpic(postsService: PostsService, authorActions: AuthorActions) {
  return action$ => action$.pipe(
    ofType(GET_AUTHOR_QUESTIONS),
    switchMap((action: AuthorAction) => {
      return postsService.getMostPopularQuestion(action.payload)
        .map((data: AuthorDto) => {
          return authorActions.getAuthorQuestionsSucceed(data);
        }, error => {
          return authorActions.getAuthorQuestionsFailed(error);
        });
    })
  );
}

export function getAnswersEpic(postsService: PostsService, answerActions: AnswersActions) {
  return action$ => action$.pipe(
    ofType(GET_ANSWERS),
    switchMap((action: AnswerAction) => {
      return postsService.getQuestionAnswers(action.payload)
        .map((data: AuthorDto) => {
          return answerActions.getAnswersSucceed(data.items);
        }, error => {
          return answerActions.getAnswersFailed(error);
        });
    })
  );
}
