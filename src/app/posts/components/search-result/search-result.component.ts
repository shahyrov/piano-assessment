import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorActions } from '../../actions';
import { AuthorDto, PostsDto } from '../../models';
import { getPostsSelector, getQuestionsSelector, searchTermSelector } from '../../selectors';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @select(getPostsSelector) posts$: Observable<PostsDto>;
  @select(searchTermSelector) searchTerm$: Observable<string>;
  @select(getQuestionsSelector) questions$: Observable<AuthorDto>;

  displayedColumns: string[] = ['author', 'topic', 'qtyAnswers', 'tags'];

  constructor(private authorActions: AuthorActions,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  onAuthorClick(userId: number) {
    this.authorActions.getAuthorQuestions(userId);
    let isDialogOpen = false;
    this.questions$.subscribe((res: AuthorDto) => {
      if (!!res && !isDialogOpen) {
        isDialogOpen = true;
        this.onOpenDialog(res);
      }
    });
  }

  onQuestionDetail(id: number) {
    this.authorActions.setSelectedQuestionId(id);
    this.router.navigateByUrl('question', {relativeTo: this.activatedRoute});
  }

  onOpenDialog(data: AuthorDto) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '700px',
      data: data.items
    });
  }

}
