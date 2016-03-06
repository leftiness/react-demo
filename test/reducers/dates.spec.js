import expect from 'expect.js';
import dates from '../../reducers/dates';

export default describe('dates reducer', () => {
  it('should handle initial state', () => {
    expect(
      dates(undefined, {})
    ).to.eql({})
  })
});
