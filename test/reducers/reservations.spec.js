import expect from 'expect.js';

import reservations from 'reducers/reservations.js';

export default describe('reservations reducer', () => {
  it('should handle initial state', () => {
    expect(
      reservations(undefined, {})
    ).to.eql({})
  })
});
