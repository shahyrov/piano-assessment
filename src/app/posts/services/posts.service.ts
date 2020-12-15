import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PostsDto } from '../models';

const BASE_URL = 'https://api.stackexchange.com/2.2';
const URL_PARAMS = 'key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default';
const SEARCH_URL = `${BASE_URL}/search?${URL_PARAMS}`;
const QUESTIONS_URL = `${BASE_URL}/questions?${URL_PARAMS}`;
const ANSWERS_URL = `${BASE_URL}/questions`;

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) { }

  searchForPosts(term: string): Observable<{items: PostsDto}> {
    return this.http.get<any>(`${SEARCH_URL}&tagged=${term}`);
  }

  getMostPopularQuestion(userId: number): Observable<any> {
    return this.http.get<any>(`${QUESTIONS_URL}&ids=${userId}`);
  }

  getQuestionAnswers(questionId: number): Observable<any> {
    return this.http.get<any>(`${ANSWERS_URL}/${questionId}/answers?${URL_PARAMS}`);
  }
}
