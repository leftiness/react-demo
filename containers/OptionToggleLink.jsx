import { connect } from 'react-redux';
import has from 'lodash/has';
import omit from 'lodash/omit';

import navigation from 'actions/navigation.js';
import Link from 'components/Link.jsx';

const mapStateToProps = (state, ownProps) => {
  const { name, options } = state.navigation.location;
  const { toggle } = ownProps;
  const toggled = (has(options, toggle)
    ? omit(options, toggle)
    : { ...options, [toggle]: 1 }
  );
  return { name, options: toggled, ...ownProps };
};

const OptionToggleLink = connect(
  mapStateToProps
)(Link);

export default OptionToggleLink;
