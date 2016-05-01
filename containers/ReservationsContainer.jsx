import { connect } from 'react-redux';

import Reservations from 'components/Reservations.jsx';

const mapStateToProps = (state) => {
  const reservations = state.reservations;
  return { reservations };
};

export default connect(
  mapStateToProps
)(Reservations);
