import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import TodoAppView from '../src/screens/TodoApp/views/TodoAppView';

describe("A TodoAppView", function () {
  it("contains spec with an expication", function () {
    expect(shallow(<TodoAppView />).contains(<h1>todos</h1>)).to.equal(true)
  });
})
