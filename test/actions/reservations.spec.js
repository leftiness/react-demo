import expect from 'expect.js';

import reservations from 'actions/reservations.js';

export default describe('reservations', () => {

  describe('#addReservation()', () => {

    it('should return an ADD_RESERVATION action', () => {
      const atype = 'ADD_RESERVATION';
      const id = '0';
      const name = 'Melody';
      const result = reservations.addReservation(id, name);
      expect(result).to.eql({ type: atype, id, name });
    });

  });

  describe('#deleteReservation()', () => {

    it('should return a DELETE_RESERVATION action', () => {
      const atype = 'DELETE_RESERVATION';
      const id = '0';
      const result = reservations.deleteReservation(id);
      expect(result).to.eql({ type: atype, id });
    });

  });

});
