import expect from 'expect.js';
import { get, set } from 'lodash';

import reservations from 'reducers/reservations.js';

export default describe('reservations reducer', () => {

  const id = '0';
  const name = 'Melody';

  it('should handle initial state', () => {
    const result = reservations();
    expect(result).to.be.empty();
  });

  describe('add reservation', () => {

    const atype = 'ADD_RESERVATION';
    const action = { type: atype, id, name };
    const result = reservations({}, action);
    const record = get(result, id);

    it('should create one reservation', () => {
      expect(result).to.only.have.key(id);
    });

    it('should have the correct properties', () => {
      expect(record).to.have.property('id', id);
      expect(record).to.have.property('name', name);
    });

  });

  describe('update reservation', () => {

    const atype = 'UPDATE_RESERVATION';
    const changedName = 'Felicity';
    const state = set({}, id, { id, name });
    const action = { type: atype, id, name: changedName };
    const result = reservations(state, action);
    const record = get(result, id);

    it('should still have one reservation', () => {
      expect(result).to.only.have.key(id);
    });

    it('should have updated properties', () => {
      expect(record).to.have.property('id', id);
      expect(record).to.have.property('name', changedName);
    });

  });

  describe('delete reservation', () => {

    const atype = 'DELETE_RESERVATION';
    const state = set({}, id, { id });
    const action = { type: atype, id };
    const result = reservations(state, action);

    it('should have no reservations', () => {
      expect(result).to.be.empty();
    });

  });

});
