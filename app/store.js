import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/main';
import DevTools from './components/shared/devtools/DevTools';

// const store = createStore(rootReducer, defaultState);

let store;

if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      // defaultState,
      DevTools.instrument() // Who knows, creates a function that that the store needs to display redux action events
    )
  );
  // if (module.hot) {
  //   module.hot.accept('./reducers/', () => {
  //     const nextRootReducer = require('./reducers/main').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
} else {
  // Production store creation does not require DevTools or hot module updates
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
      // defaultState
    )
  );
}

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
