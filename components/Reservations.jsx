import React, { PropTypes } from 'react';
import { map } from 'lodash';

import Reservation from './Reservation.jsx';

const Reservations = ({ reservations = [] }) => (
  <div>
    <h2>Hello</h2>
    {
      reservations.length === 0
        ? <div>There are no reservations.</div>
        : map(reservations, (res) => {
          return <Reservation />
        })
    }
  </div>
);

Reservations.propTypes = {
  reservations: PropTypes.array
};

export default Reservations;
