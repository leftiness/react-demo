const navigation = (state = {
  location: undefined
}, action) => {
  switch (action.type) {
    case 'NAVIGATION_COMPLETE' :
      return {
        location: action.location
      };
    default:
      return state;
  }
};

export default navigation;
