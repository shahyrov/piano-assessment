import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from '../models';

export type AnswerAction = Action<any, any>;

export const GET_ANSWERS = '[ANSWERS] Get answers';
export const GET_ANSWERS_SUCCESS = '[ANSWERS] Get answers success';
export const GET_ANSWERS_FAILURE = '[ANSWERS]  Get answers failed';

@Injectable()
export class AnswersActions {
  @dispatch()
  getAnswers = (payload: number): AnswerAction => ({
    type: GET_ANSWERS,
    payload
  })
  @dispatch()
  getAnswersSucceed = (payload: any): AnswerAction => ({
    type: GET_ANSWERS_SUCCESS,
    payload
  })
  getAnswersFailed = (error: any): AnswerAction => ({
    type: GET_ANSWERS_FAILURE,
    payload: undefined
  })
}
