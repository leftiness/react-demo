import React from 'react';

import Link from './Link.jsx';

const style = { float: 'right' };

const Nav = () => (
  <nav>
    <Link name="home" className="brand">Great App</Link>
    <button style={ style } className="pseudo">menu</button>
  </nav>
);

export default Nav;
