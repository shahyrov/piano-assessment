import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { postsReducer } from '../posts/reducers/posts.reducer';
import { authorReducer } from '../posts/reducers/author.reducer';
import { answersReducer } from '../posts/reducers';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    search: postsReducer,
    author: authorReducer,
    answers: answersReducer,
    router: routerReducer,
  })
);
