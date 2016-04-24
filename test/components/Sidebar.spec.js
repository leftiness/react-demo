import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';
import get from 'lodash/get';
import map from 'lodash/map';
import keys from 'lodash/keys';

import Sidebar from 'components/Sidebar.jsx';

describe('Sidebar', () => {

  it('should be a div', () => {
    const renderer = utils.createRenderer();
    const element = React.createElement(Sidebar);
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.type).to.be('div');
  });

  it('should render sidebar links', () => {
    const renderer = utils.createRenderer();
    const routes = {
      test: { text: 'Test' },
      foo: { text: 'Foo' }
    };
    const akeys = keys(routes);
    const element = React.createElement(Sidebar, { routes } );
    renderer.render(element);
    const result = renderer.getRenderOutput();
    const links = get(result, 'props.children[1]');
    expect(links).to.be.an('array');
    expect(links).to.have.length(akeys.length);
    map(links, (link, i) => {
      const key = akeys[i];
      const text = get(routes, key + '.text');
      const { children, name } = get(link, 'props');
      const atype = get(link, 'type.name');
      expect(atype).to.equal('Link');
      expect(children).to.equal(text);
      expect(name).to.equal(key);
    });
  });

});
