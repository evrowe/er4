import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Route Components
import App from './components/App';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Journal from './components/journal/Journal';
import JournalEntry from './components/journal/journal-entry/JournalEntry';
import JournalList from './components/journal/journal-list/JournalList';
import Landing from './components/landing/Landing';
import NotFound from './components/not-found/NotFound';

export default function(store) {
  // Return Route Component Definition

  return (
    <Route path='/' component={App}>
      <IndexRoute component={Landing}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/journal' component={Journal}>
        <IndexRoute component={JournalList} />
        <Route path='/entry/:entryId' component={JournalEntry}/>
      </Route>
      <Route path='*' component={NotFound}/>
    </Route>
  );
}
