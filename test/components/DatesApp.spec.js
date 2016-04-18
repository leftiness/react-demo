import utils from 'react-addons-test-utils';
import React from 'react';
import expect from 'expect.js';

/*
Verbose import required due to some weird behavior.

Importing from 'components' causes it to throw an exception which complains
about components/Application.jsx not being found.

import { DatesApp } from 'components';
*/

import DatesApp from 'components/DatesApp.jsx';

describe('DatesApp', () => {
  const renderer = utils.createRenderer();
  const element = React.createElement(DatesApp);
  it('should be a div', () => {
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.type).to.be('div');
  });
  it('should say hello', () => {
    renderer.render(element);
    const result = renderer.getRenderOutput();
    expect(result.props.children).to.eql('Hello');
  });
});
