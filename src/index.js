import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import { Root } from './components';
import * as serviceWorker from './serviceWorker';

function initializeReactGA() {
  ReactGA.initialize('UA-134863773-1');
  ReactGA.pageview('/');
}

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
