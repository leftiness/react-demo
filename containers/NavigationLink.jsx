import { connect } from 'react-redux';

import { Link } from 'components';
import { ROUTES } from 'constants';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.name === state.navigation.location.name,
    url: '#' + ROUTES.generate(ownProps.name)
  };
};

const NavigationLink = connect(
  mapStateToProps
)(Link);

export default NavigationLink;
