import { connect } from 'react-redux';
import has from 'lodash/has';

import Sidebar from 'components/Sidebar.jsx';

const mapStateToProps = (state) => {
  const visible = has(state.navigation.location.options, 'sidebar')
  return { visible };
};

const SidebarContainer = connect(
  mapStateToProps
)(Sidebar);

export default SidebarContainer;
