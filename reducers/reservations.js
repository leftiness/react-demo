import { assign, omit, flow } from 'lodash/fp';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return flow(
        omit('type'),
        (a) => ({ [a.id] : { ...a }}),
        assign(state),
      )(action);
    case 'DELETE_RESERVATION':
      return omit(action.id)(state);
    default:
      return state;
  }
};
