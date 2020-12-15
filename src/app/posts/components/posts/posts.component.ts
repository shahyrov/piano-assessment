import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { PostActions } from '../../actions';
import { isLoadingSelector, searchTermSelector } from '../../selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @select(searchTermSelector) searchTerm$: Observable<string>;
  @select(isLoadingSelector) isLoading$: Observable<boolean>;

  searchForm: FormGroup;

  constructor(private postActions: PostActions) {}

  ngOnInit() {
    this.searchTerm$.subscribe(res => {
      this.searchForm = new FormGroup({
        searchTerm: new FormControl(res)
      });
    });
  }

  onSearch() {
    const { searchTerm } = this.searchForm.value;
    if (!!searchTerm) {
      this.postActions.getPosts(searchTerm);
    }
  }

  onClearSearchTerm() {
    this.searchForm.get('searchTerm').setValue('');
    this.postActions.clearSearchTerm();
  }

}
