import React, { PropTypes } from 'react';

import ROUTER from 'constants/ROUTER.js';

const Link = ({ children, name, ...props }) => {
  const href = '#' + ROUTER.generate(name);
  return <a href={ href } { ...props }>{ children }</a>
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
