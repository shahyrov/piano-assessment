import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgmatPostsModule } from './ngmat-posts.module';
import { PostsService } from './services';
import { PostsEpic } from './epics';
import { AnswersActions, AuthorActions, PostActions } from './actions';
import {
  PostsComponent,
  QuestionDetailComponent,
  SearchResultComponent,
  DialogComponent
} from './components';

const COMPONENTS = [
  PostsComponent,
  SearchResultComponent,
  QuestionDetailComponent,
  DialogComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgmatPostsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    DialogComponent
  ],
  declarations: COMPONENTS,
  exports: [...COMPONENTS],
  providers: [
    PostsService,
    PostsEpic,
    PostActions,
    AuthorActions,
    AnswersActions
  ]
})
export class PostsModule {
  constructor() { }
}
