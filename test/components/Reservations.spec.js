import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';
import { get, curry } from 'lodash';

import Reservations from 'components/Reservations.jsx';

describe('Reservations', () => {
  const result = curry((component, props) => {
    const renderer = utils.createRenderer();
    const element = React.createElement(component, props);
    renderer.render(element);
    return renderer.getRenderOutput();
  })(Reservations);
  const empty = result({ reservations: [] });
  const one = result({ reservations: [ 'foo' ] });

  it('should be a div', () => {
    const atype = get(empty, 'type');
    expect(atype).to.be('div');
  });

  it('should have an h2', () => {
    const atype = get(empty, 'props.children[0].type');
    expect(atype).to.be('h2');
  });

  it('should say hello', () => {
    const children = get(empty, 'props.children[0].props.children');
    expect(children).to.be('Hello');
  });

  it('should have a div', () => {
    const atype = get(empty, 'props.children[1].type');
    expect(atype).to.be('div');
  });

  it('should say that there are no reservations', () => {
    const children = get(empty, 'props.children[1].props.children');
    expect(children).to.be('There are no reservations.');
  });

  it('should have an array', () => {
    const children = get(one, 'props.children[1]');
    expect(children).to.be.an('array');
  });

  it('should have one item', () => {
    const length = get(one, 'props.children[1].length');
    expect(length).to.be(1);
  });

  it('should be a reservation', () => {
    const name = get(one, 'props.children[1][0].type.name');
    expect(name).to.be('Reservation');
  });

  it.skip('should have the right props', () => {});

});
