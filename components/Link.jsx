import React, { PropTypes } from 'react';

const Link = ({ active, children, url }) => {
  if (active) {
    return <span>{ children }</span>
  }

  return <a href={ url }>{ children }</a>
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
