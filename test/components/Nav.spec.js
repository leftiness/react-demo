import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';

import Nav from 'components/Nav.jsx';

describe('Nav', () => {
  const renderer = utils.createRenderer();
  it('should be a nav', () => {
    const element = React.createElement(Nav);
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.type).to.be('nav');
  });
});
