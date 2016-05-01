import React, { PropTypes } from 'react';
import { isEmpty, map, keys } from 'lodash';

import Reservation from './Reservation.jsx';

const Reservations = ({ reservations = {}, onAddReservation }) => {
  let nameInput;
  const add = (input) => {
    onAddReservation(input.value);
    input.value = '';
  };
  return (
    <div>
      <h2>Hello</h2>
      {
        isEmpty(reservations)
          ? <div>There are no reservations.</div>
          : map(keys(reservations), (key) => {
            const reservation = reservations[key];
            return <Reservation key={ reservation.id }{ ...reservation } />
          })
      }
      <input
        ref={ (input) => nameInput = input }
        placeholder="Name"
        onKeyDown={ (e) => e.keyCode === 13 ? add(nameInput) : false }
      />
      <button onClick={ () => add(nameInput) }>Add</button>
    </div>
  );
}

Reservations.propTypes = {
  reservations: PropTypes.object,
  onAddReservation: PropTypes.func.isRequired,
};

export default Reservations;
