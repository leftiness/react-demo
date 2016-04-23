import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const Picnic = require('picnic/releases/picnic.min.css');
const PicnicPlugins = require('picnic/releases/plugins.min.css');

import * as reducers from './reducers';
import ApplicationContainer from 'containers/ApplicationContainer.jsx';

const store = createStore(
  combineReducers({
    ...reducers
  })
);

render(
  <Provider store={store}>
    <ApplicationContainer/>
  </Provider>,
  document.getElementById('root')
);
