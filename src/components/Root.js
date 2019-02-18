import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App, Header } from './';
import MusicMaster from '../projects/music-master';

function Root() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/music-master" component={MusicMaster} />
          <Route path="/reaction" render={() => <div>Reaction</div>} />
          <Route
            path="/evens-or-odds"
            render={() => <div>Evens or Odds</div>}
          />
        </Switch>
      </>
    </Router>
  );
}

export default Root;
