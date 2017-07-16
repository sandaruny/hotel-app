import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
// import reducers from '<project-path>/reducers';
import AppRoutes from './initializers/app-routes';

const reducer = combineReducers({
  routing: routeReducer,
});

// Sync dispatched route actions to the history 
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

// const store = createStore(() => {});
const store = createStoreWithMiddleware(reducer)
// Required for replaying actions from devtools to work 
reduxRouterMiddleware.listenForReplays(store)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {AppRoutes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
