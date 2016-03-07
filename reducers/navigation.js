const navigation = (state = {
  location: {
    name: undefined,
    options: {}
  }
}, action) => {
  const { type, location } = action;
  switch (type) {
    case 'NAVIGATION_COMPLETE' :
      return { location };
    default:
      return state;
  }
};

export default navigation;
