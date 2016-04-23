import { connect } from 'react-redux';

import Link from 'components/Link.jsx';
import ROUTES from 'constants/ROUTES.js';

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
