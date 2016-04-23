import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';

import Home from 'components/Home.jsx';

describe('Home', () => {
  const renderer = utils.createRenderer();
  const element = React.createElement(Home);
  it('should be a div', () => {
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.type).to.be('div');
  });
  it('should say home', () => {
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.props.children).to.eql('Home');
  });
});
