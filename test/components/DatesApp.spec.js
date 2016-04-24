import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';

import DatesApp from 'components/DatesApp.jsx';

describe('DatesApp', () => {
  const renderer = utils.createRenderer();
  const element = React.createElement(DatesApp);
  it('should be an h2', () => {
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.type).to.be('h2');
  });
  it('should say hello', () => {
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.props.children).to.eql('Hello');
  });
});
