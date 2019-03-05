import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import rootReducer from './reducers';
import './index.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const EvensOrOdds = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default EvensOrOdds;
