import React, { PropTypes } from 'react';
import get from 'lodash/get';

import ROUTES from 'constants/ROUTES.js';

import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';
import NotFound from './NotFound.jsx';

let listener;

const style = {
  padding: '80px 0 0',
  margin: '0 auto',
  maxWidth: '1200px',
  width: '90%'
};

const Application = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    onHashChange: PropTypes.func.isRequired
  },
  render() {
    const { name, options } = this.props.location;
    const component = get(ROUTES, name + '.component') || NotFound;
    return (
      <div>
        <Nav />
        <div style={ style } >
          <Sidebar />
          { React.createElement(component) }
        </div>
      </div>
    );
  },
  componentWillMount() {
    listener = () => {
      this.props.onHashChange(window.location.hash.substr(1));
    };
    listener();
    window.addEventListener('hashchange', listener, false);
  },
  componentWillUnmount() {
    window.removeEventListener('hashchange', listener, false);
  }
});

export default Application;
