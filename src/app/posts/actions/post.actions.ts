import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action, PostsDto } from '../models';

export type PostAction = Action<any, any>;

export const GET_POSTS = '[POSTS] Get posts';
export const GET_POSTS_SUCCESS = '[POSTS] Get posts success';
export const GET_POSTS_FAILURE = '[POSTS]  Get posts failed';
export const CLEAR_SEARCH_TERM = '[POSTS]  Clear search term';

@Injectable()
export class PostActions {
  @dispatch()
  getPosts = (payload: string): PostAction => ({
    type: GET_POSTS,
    payload
  })
  getPostsSucceeded = (payload: PostsDto): PostAction => ({
    type: GET_POSTS_SUCCESS,
    payload
  })
  getPostsFailed = (error: any): PostAction => ({
    type: GET_POSTS_FAILURE,
    payload: undefined,
    error
  })

  @dispatch()
  clearSearchTerm = (): PostAction => ({
    type: CLEAR_SEARCH_TERM,
    payload: undefined
  })
}
