import React, { PropTypes } from 'react';

import ROUTER from 'constants/ROUTER.js';

const Link = ({ children, name, options, ...props }) => {
  const href = '#' + ROUTER.generate(name, options);
  return <a href={ href } { ...props }>{ children }</a>
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Link;
