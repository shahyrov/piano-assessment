import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action, AuthorDto } from '../models';

export type AuthorAction = Action<any, any>;

export const GET_AUTHOR_QUESTIONS = '[AUTHOR] Get author';
export const GET_AUTHOR_QUESTIONS_SUCCESS = '[AUTHOR] Get author success';
export const GET_AUTHOR_QUESTIONS_FAILURE = '[AUTHOR]  Get author failed';
export const SET_QUESTIONS_ID = '[AUTHOR]  Set question id';

@Injectable()
export class AuthorActions {
  @dispatch()
  getAuthorQuestions = (payload: number): AuthorAction => ({
    type: GET_AUTHOR_QUESTIONS,
    payload
  })
  getAuthorQuestionsSucceed = (payload: AuthorDto): AuthorAction => ({
    type: GET_AUTHOR_QUESTIONS_SUCCESS,
    payload
  })
  getAuthorQuestionsFailed = (error: any): AuthorAction => ({
    type: GET_AUTHOR_QUESTIONS_FAILURE,
    payload: undefined,
    error
  })
  @dispatch()
  setSelectedQuestionId = (payload: number): AuthorAction => ({
    type: SET_QUESTIONS_ID,
    payload
  })
}
