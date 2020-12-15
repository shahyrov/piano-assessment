import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent, QuestionDetailComponent, SearchResultComponent } from './posts/components';

const routes: Routes = [
  {
    path: 'search', component: PostsComponent },
  { path: 'result', component: SearchResultComponent },
  { path: 'question', component: QuestionDetailComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
