import React, { PropTypes } from 'react';
import keys from 'lodash/keys';
import map from 'lodash/map';
import get from 'lodash/get';

import ROUTES from 'constants/ROUTES.js';

import Link from './Link.jsx';

const Sidebar = ({ routes = ROUTES, ...props }) => (
  <div { ...props } style={{ float: 'left', width: '200px' }} >
    <h2>Stuff</h2>
    {
      map(keys(routes), (key, i) => {
        return <Link name={ key }
          className="pseudo button stack"
          key={ i }
          style={{ color: 'blue' }}
          >
          { get(routes, key + '.text') }
        </Link>
      })
    }
  </div>
);

Sidebar.propTypes = {
  routes: PropTypes.object
};

export default Sidebar;