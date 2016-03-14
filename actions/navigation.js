export const complete = (name, options = {}) => {
  return {
    type: 'NAVIGATION_COMPLETE',
    location: { name, options }
  };
};
