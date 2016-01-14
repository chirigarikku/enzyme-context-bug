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
  it('should succeed', () => {
    const wrapper = shallow(<MyComponent x={5} />, { context: { location: { pathname: 'x' }} });
    expect(wrapper.first('div').text()).to.equal('x');

    wrapper.setProps({ x: 5 });
    expect(wrapper.first('div').text()).to.equal('x');
  });
});