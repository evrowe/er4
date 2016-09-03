import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Public Route Components
import AhAhAh from './components/auth/AhAhAh';
import App from './components/App';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Journal from './components/journal/Journal';
import JournalEntry from './components/journal/journal-entry/JournalEntry';
import JournalList from './components/journal/journal-list/JournalList';
import Landing from './components/landing/Landing';
import LogIn from './components/login/Login';
import NotFound from './components/not-found/NotFound';

// Dashboard Route Components
import Dashboard from './components/dashboard/Dashboard';
import DashboardIndex from './components/dashboard/DashboardIndex';

// Utilitees
import './utils/google-analytics';
import Authentication from './utils/authentication';

function checkAuth(nextState, replace, cb) {
  // Determine whether we're logged in
  Authentication.check().then(
    // Success
    authenticated => {
      console.log('authenticated state', authenticated);
      if (!authenticated) {
        replace('/you-didnt-say-the-magic-word');
      }
      cb();
    },
    // Fail
    () => {
      console.log('auth failure');
      replace('/you-didnt-say-the-magic-word');
      cb();
    }
  );
}

export default function(store) {
  // Return Route Component Definition

  return (
    <Route path='/' component={App}>
      <IndexRoute component={Landing}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/journal' component={Journal}>
        <IndexRoute component={JournalList} />
        <Route path='/journal/entry/:entryId' component={JournalEntry}/>
      </Route>
      <Route path='/login' component={LogIn}/>
      <Route path='/you-didnt-say-the-magic-word' component={AhAhAh}/>

      <Route path='/dashboard' component={Dashboard} onEnter={checkAuth}>
        <IndexRoute component={DashboardIndex} />
      </Route>

      <Route path='*' component={NotFound}/>
    </Route>
  );
}
