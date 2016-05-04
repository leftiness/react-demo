import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';
import { get, set } from 'lodash';

import Reservations from 'components/Reservations.jsx';

const result = (component, props) => (moreProps) => {
  if (moreProps) return result(component, { ...props, ...moreProps });
  const renderer = utils.createRenderer();
  const element = React.createElement(component, props);
  renderer.render(element);
  return renderer.getRenderOutput();
};

const spy = () => {
  let args = [];
  let called = 0;
  let fn = () => {
    called += 1;
    args = arguments;
  };
  fn.args = args;
  fn.called = called;
  return fn;
};

const emptyReservations = result(Reservations, {
  reservations: {},
  onAddReservation: spy(),
  onDeleteReservation: spy(),
});

const oneReservation = emptyReservations({
  reservations: {
    '0': { id: '0', name: 'Melody' }
  }
});

describe('Reservations', () => {

  const empty = emptyReservations();
  const one = oneReservation();
  const mainChildren = 'props.children';
  const reservationList = mainChildren + '[1]';

  it('should be a div', () => {
    const atype = get(empty, 'type');
    expect(atype).to.be('div');
  });

  it('should have an array', () => {
    const children = get(empty, mainChildren);
    expect(children).to.be.an('array');
  });

  it('should have three items', () => {
    const length = get(empty, mainChildren + '.length');
    expect(length).to.be(3);
  });

  describe('header', () => {

    const h2 = mainChildren + '[0]';

    it('should have an h2', () => {
      const atype = get(empty, h2 + '.type');
      expect(atype).to.be('h2');
    });

    it('should say hello', () => {
      const children = get(empty, h2 + '.props.children');
      expect(children).to.be('Hello');
    });

  });

  describe('empty list of reservations', () => {

    it('should have a div', () => {
      const atype = get(empty, reservationList + '.type');
      expect(atype).to.be('div');
    });

    it('should say that there are no reservations', () => {
      const children = get(empty, reservationList + '.props.children');
      expect(children).to.be('There are no reservations.');
    });

  });

  describe('list with one reservation', () => {

    it('should have an array', () => {
      const children = get(one, reservationList);
      expect(children).to.be.an('array');
    });

    it('should have one item', () => {
      const length = get(one, reservationList + '.length');
      expect(length).to.be(1);
    });

    describe('reservation group', () => {

      const reservationGroup = reservationList + '[0]';
      const reservationChildren = reservationGroup + '.props.children';

      it('should be a div', () => {
        const atype = get(one, reservationGroup + '.type');
        expect(atype).to.be('div');
      });

      it('should have an array', () => {
        const children = get(one, reservationChildren);
        expect(children).to.be.an('array');
      });

      it('should have two items', () => {
        const length = get(one, reservationChildren + '.length');
        expect(length).to.be(2);
      });

      describe('reservation itself', () => {

        const reservation = reservationChildren + '[0]';

        it('should be a reservation', () => {
          const name = get(one, reservation + '.type.name');
          expect(name).to.be('Reservation');
        });

        it('should have the right props', () => {
          const props = get(one, reservation + '.props');
          expect(props).to.have.property('id', '0');
          expect(props).to.have.property('name', 'Melody');
          expect(props).to.only.have.keys('id', 'name');
        });

      });

      describe('reservation\'s delete button', () => {

        const button = reservationChildren + '[1]';

        it('should be a button', () => {
          const atype = get(one, button + '.type');
          expect(atype).to.be('button');
        });

        it.skip('should call onDeleteReservation on click');

        it.skip('should pass the reservation id as an argument');

      });

    });

  });

  describe('add reservation form group', () => {

    const formGroup = mainChildren + '[2]';
    const formChildren = formGroup + '.props.children';

    it('should be a div', () => {
      const atype = get(empty, formGroup + '.type');
      expect(atype).to.be('div');
    });

    it('should have an array', () => {
      const children = get(empty, formChildren);
      expect(children).to.be.an('array');
    });

    it('should have two items', () => {
      const length = get(empty, formChildren + '.length');
      expect(length).to.be(2);
    });

    describe('reservation name input', () => {

      const input = formChildren + '[0]';

      it('should be an input', () => {
        const atype = get(empty, input + '.type');
        expect(atype).to.be('input');
      });

      it.skip('should call onAddReservation when enter is pressed');

      it.skip('should have form validation');

      it.skip('should say name in the placeholder');

    });

    describe('add reservation button', () => {

      const button = formChildren + '[1]';

      it('should be a button', () => {
        const atype = get(empty, button + '.type');
        expect(atype).to.be('button');
      });

      it.skip('should call onAddReservation on click');

    });

  });

});
