import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';
import { get, curry } from 'lodash';

import Reservations from 'components/Reservations.jsx';

describe('Reservations', () => {
  const renderer = utils.createRenderer();
  const result = curry((element, props) => {
    return React.createElement(element, props);
  })(Reservations);
  const empty = result([]);
  const one = result([ 'foo' ]);

  it('should be a reservations component', () => {
    const atype = get(empty, 'type.name');
    expect(atype).to.be('Reservations');
  });

  /*
  TODO
  Figure out this unit testing stuff...

  it('should have an h2', () => {
    const atype = get(empty, 'props.children[0].type');
    expect(atype).to.eql('h2');
  });

  it('should say hello', () => {
    const children = get(empty, 'props.children[0].children');
    expect(children).to.eql('Hello');
  });

  it('should have a div', () => {
    const atype = get(empty, 'props.children[1].type');
    expect(atype).to.eql('div');
  });

  it('should say that there are no reservations', () => {
    const children = get(empty, 'props.children[1].children');
    expect(children).to.eql('There are no reservations.');
  });

  it('should have an array', () => {
    const children = get(one, 'props.children[1].children');
    expect(children).to.be.an('array');
  });

  it('should have one item', () => {
    const length = get(one, 'props.children[1].children.length');
    expect(length).to.eql(1);
  });

  it('should be a reservation', () => {
    const name = get(one, 'props.children[1].children.type.name');
    expect(name).to.eql('Reservation');
  });

  it('should have the right props', () => {
    // ...
  });

  */

});
