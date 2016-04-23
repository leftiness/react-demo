import { connect } from 'react-redux';

import navigation from 'actions/navigation.js';
import Application from 'components/Application.jsx';
import ROUTES from 'constants/ROUTES.js';

const mapStateToProps = (state) => {
  return {
    location: state.navigation.location
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHashChange: (loc) => {
      const { name, options } = ROUTES.lookup(loc);
      dispatch(navigation.complete(name, options));
    }
  };
};

const ApplicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ApplicationContainer;
