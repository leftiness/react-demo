import React, { PropTypes } from 'react';

import Home from './Home.jsx';
import DatesApp from './DatesApp.jsx';
import Nav from './Nav.jsx';
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
    return (
      <div>
        <Nav />
        <div style={ style } >
          { 'home' === name ? <Home />
          : 'dates' === name ? <DatesApp />
          : <NotFound />
          }
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
