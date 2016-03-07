import React, { PropTypes } from 'react';

import DatesApp from './DatesApp.jsx';

let listener;

const Application = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    onHashChange: PropTypes.func.isRequired
  },
  render() {
    const { name, options } = this.props.location;
    switch (name) {
      case 'dates':
        return <DatesApp />
      default:
        return <div>404</div>
    }
  },
  componentWillMount() {
    window.addEventListener('hashchange', listener = () => {
      this.props.onHashChange(window.location.hash.substr(1));
    }, false);
  },
  componentWillUnmount() {
    window.removeEventListener('hashchange', listener, false);
  }
});

export default Application;
