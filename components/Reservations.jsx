import React, { PropTypes } from 'react';
import { isEmpty, map, keys } from 'lodash';

import Reservation from './Reservation.jsx';

const Reservations = ({ reservations = {} }) => (
  <div>
    <h2>Hello</h2>
    {
      isEmpty(reservations)
        ? <div>There are no reservations.</div>
        : map(keys(reservations), (key) => {
          const reservation = reservations[key];
          return <Reservation { ...reservation } />
        })
    }
  </div>
);

Reservations.propTypes = {
  reservations: PropTypes.object
};

export default Reservations;
