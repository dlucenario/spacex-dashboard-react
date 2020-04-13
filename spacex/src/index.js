import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './fonts/Lato-Regular.ttf';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import launchReducer from './store/reducers/launchReducer';
import missionReducer from './store/reducers/missionReducer';
import rocketReducer from './store/reducers/rocketReducer';
import dragonReducer from './store/reducers/dragonReducer';
import coreReducer from './store/reducers/coreReducer';
import shipReducer from './store/reducers/shipReducer';
import payloadReducer from './store/reducers/payloadReducer';

const rootReducer = combineReducers({
  launchReducer: launchReducer,
  missionReducer: missionReducer,
  rocketReducer: rocketReducer,
  dragonReducer: dragonReducer,
  coreReducer: coreReducer,
  shipReducer: shipReducer,
  payloadReducer: payloadReducer
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
