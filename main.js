import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import uniloc from 'uniloc';

import * as reducers from './reducers';
import { ApplicationContainer } from './containers';

const store = createStore(
  combineReducers({
    ...reducers
  })
);

const routes = uniloc({
  dates: 'GET /dates'
});

render(
  <Provider store={store}>
    <ApplicationContainer routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
