const navigation = {
  complete: (name, options = {}) => {
    return {
      type: 'NAVIGATION_COMPLETE',
      location: { name, options }
    };
  }
};

export default navigation;
