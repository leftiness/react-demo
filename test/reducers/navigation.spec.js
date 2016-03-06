import expect from 'expect.js';
import navigation from '../../reducers/navigation.js';

export default describe('navigation reducer', () => {
  it('should handle initial state', () => {
    expect(
      navigation(undefined, {})
    ).to.eql({
      location: undefined
    });
  });

  it('should handle NAVIGATION_COMPLETE', () => {
    expect(
      navigation(undefined, {
        type: 'NAVIGATION_COMPLETE',
        location: 'foo'
      })
    ).to.eql({
        location: 'foo'
    });
  });
});
