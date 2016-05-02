import { connect } from 'react-redux';

import Reservations from 'components/Reservations.jsx';
import { addReservation, deleteReservation } from 'actions/reservations.js';

/*
 * Eventually, I'll ask a service to create a reservation record.
 * If the service succeeds, the promise will have an id. Then I'll send that
 * to redux. For now, I'm just going to increment this value.
 */
let tempid = 0;

const mapStateToProps = (state) => {
  const reservations = state.reservations;
  return { reservations };
};

const mapDispatchToProps = (dispatch) => {
  const onAddReservation = (name) => dispatch(addReservation(tempid++, name));
  const onDeleteReservation = (id) => dispatch(deleteReservation(id));
  return { onAddReservation, onDeleteReservation };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reservations);
