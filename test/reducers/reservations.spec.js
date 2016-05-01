import expect from 'expect.js';
import { get, set } from 'lodash';

import reservations from 'reducers/reservations.js';

export default describe('reservations reducer', () => {

  it('should handle initial state', () => {
    const result = reservations();
    expect(result).to.be.empty();
  });

  it('should create a new reservation', () => {
    const atype = 'ADD_RESERVATION';
    const id = '0';
    const name = 'Melody';
    const action = { type: atype, id, name };
    const result = reservations({}, action);
    const record = get(result, id);
    expect(result).to.only.have.key(id);
    expect(record).to.have.property('id', id);
    expect(record).to.have.property('name', name);
  });

  it('should update an existing reservation', () => {
    const atype = 'ADD_RESERVATION';
    const id = '0';
    const name = 'Melody';
    const changed = 'Felicity';
    const state = set({}, id, { id, name });
    const action = { type: atype, id, name: changed };
    const result = reservations(state, action);
    const record = get(result, id);
    expect(result).to.only.have.key(id);
    expect(record).to.have.property('id', id);
    expect(record).to.have.property('name', changed);
  });

  it('should delete a reservation', () => {
    const atype = 'DELETE_RESERVATION';
    const id = '0';
    const state = set({}, id, { id });
    const action = { type: atype, id };
    const result = reservations(state, action);
    expect(result).to.be.empty();
  });

});
