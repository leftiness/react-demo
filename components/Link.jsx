import React, { PropTypes } from 'react';

import ROUTES from 'constants/ROUTES.js';

const Link = ({ children, name, ...props }) => {
  const href = '#' + ROUTES.generate(name);
  return <a href={ href } { ...props }>{ children }</a>
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
