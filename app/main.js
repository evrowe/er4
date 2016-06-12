import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

// App Members
import store, { history } from './store';
import Routes from './routes';

// Root components
import DevTools from './components/shared/devtools/DevTools';

// Initialize routes with Store

const routes = Routes(store);

// Compose App root components and render

function composeApp() {
  if (process.env.NODE_ENV !== 'production') {
    return(
      <div>
        <Router history={history} routes={routes} />
        <DevTools/>
      </div>
    );
  } else {
    return (
      <Router history={history} routes={routes} />
    );
  }
}

render(
  <Provider store={store}>
    {composeApp()}
  </Provider>,
  document.getElementById('app-root')
);
