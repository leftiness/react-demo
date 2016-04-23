import React, { PropTypes } from 'react';

const Link = ({ active, children, url, ...props }) => {
  if (active) {
    return <span { ...props }>{ children }</span>
  }

  return <a href={ url } { ...props }>{ children }</a>
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired
};

export default Link;
