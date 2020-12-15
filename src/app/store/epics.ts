import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';
import { PostsEpic } from '../posts/epics/posts.epic';

@Injectable()
export class RootEpics {
  constructor(
    private postsEpic: PostsEpic
  ) {
  }

  public createEpics() {
    return combineEpics(
      this.postsEpic.createEpic()
    );
  }
}
