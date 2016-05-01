import React, { PropTypes } from 'react';

const Reservation = ({ name }) => (
  <div>Reservation for { name }</div>
);

Reservation.propTypes = {
  name: PropTypes.string.isRequired
};

export default Reservation;
