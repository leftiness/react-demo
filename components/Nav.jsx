import React from 'react';

import Link from './Link.jsx';
import OptionToggleLink from 'containers/OptionToggleLink.jsx'

const style = { float: 'right' };

const Nav = () => (
  <nav>
    <Link name="home" className="brand">Great App</Link>
    <OptionToggleLink style={ style }
      className="pseudo button"
      toggle="sidebar"
      >
      menu
    </OptionToggleLink>
  </nav>
);

export default Nav;
