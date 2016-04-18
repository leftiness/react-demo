import expect from 'expect.js';

import { navigation } from 'reducers';

const complete = navigation.complete;

export default describe('navigation reducer', () => {
  it('should handle initial state', () => {
    expect(
      navigation(undefined, {})
    ).to.eql({
      location: {
        name: undefined,
        options: {}
      }
    });
  });

  it('should handle NAVIGATION_COMPLETE', () => {
    const location = {
      name: 'foo',
      options: {}
    }
    expect(
      navigation(undefined, {
        type: 'NAVIGATION_COMPLETE',
        location
      })
    ).to.eql({ location });
  });

  it('should support NAVIGATION_COMPLETE options', () => {
    const location = {
      name: 'foo',
      options: {}
    };
    expect(
      navigation(undefined, {
        type: 'NAVIGATION_COMPLETE',
        location
      })
    ).to.eql({ location })
  });

});
