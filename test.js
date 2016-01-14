import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

const MyComponent = (props, {location}) =>
  <div>{location.pathname}</div>

MyComponent.contextTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string
  })
};

describe('sample test', () => {
  it('setProps: should succeed', () => {
    const wrapper = shallow(<MyComponent x={5} />, { context: { location: { pathname: 'x' }} });
    expect(wrapper.first('div').text()).to.equal('x');

    wrapper.setProps({ x: 5 });
    expect(wrapper.first('div').text()).to.equal('x');
  });

  it('setContext: should succeed', () => {
    const wrapper = shallow(<MyComponent x={5} />, { context: { location: { pathname: 'x' }} });
    expect(wrapper.first('div').text()).to.equal('x');

    wrapper.setContext({ x: 5 });
    expect(wrapper.first('div').text()).to.equal('x');
  });
});