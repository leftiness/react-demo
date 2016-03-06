export const complete = (loc) => {
  return {
    type: 'NAVIGATION_COMPLETE',
    location: loc
  };
};
