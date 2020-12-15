import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswersActions } from '../../actions';
import { AnswerDto, Post } from '../../models';
import { getAnswersSelector, isAnswersLoadingSelector, questionByIdSelector } from '../../selectors';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  @select(questionByIdSelector) question$: Observable<Post>;
  @select(getAnswersSelector) answers$: Observable<AnswerDto>;
  @select(isAnswersLoadingSelector) isAnswersLoading$: Observable<boolean>;
  quest: Post = undefined;

  constructor(private answersActions: AnswersActions) {
    this.question$.subscribe((res: Post) => {
      this.quest = res;
      if (this.quest.answer_count > 0) {
        this.answersActions.getAnswers(this.quest.question_id);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.quest.answer_count > 0) {
      this.answersActions.getAnswersSucceed(undefined);
    }
  }

}
