import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

// The top-level reducers and epics that make up our app's logic.
import { IAppState } from './model';
import { rootReducer } from './reducers';
// import { RootEpics } from './epics';

// State persistence
import { SessionStorageUtil } from './sessionStorage';
import { RootEpics } from './epics';
import { createEpicMiddleware } from 'redux-observable-es6-compat';
// import { createEpicMiddleware } from 'redux-observable';

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [RootEpics],
})

export class StoreModule {
  constructor(
    store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    const epicMiddleware = createEpicMiddleware();
    const middlewares = [ epicMiddleware ];

    store.configureStore(
      rootReducer,
      JSON.parse(localStorage.getItem('state')),
      middlewares,
      devTools.isEnabled() ? [ devTools.enhancer() ] : []
    );
    epicMiddleware.run(rootEpics.createEpics());

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);

    // Save state in sessionStorage with each state change.
    store.subscribe(() => {
      const sessionStorage = SessionStorageUtil.getInstance();
      sessionStorage.saveState(store.getState());
      localStorage.setItem('state', JSON.stringify(store.getState()));
    });
  }
}
