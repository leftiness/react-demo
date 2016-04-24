import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';

import Sidebar from 'components/Sidebar.jsx';

describe('Sidebar', () => {
  const renderer = utils.createRenderer();
  const element = React.createElement(Sidebar);
  it('should be a div', () => {
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.type).to.be('div');
  });
});
