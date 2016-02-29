import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import * as reducers from './reducers';
import { DatesApp } from './components';

const store = createStore(
  combineReducers({
    ...reducers
  })
);

render(
  <Provider store={store}>
    <DatesApp />
  </Provider>,
  document.getElementById('root')
);
