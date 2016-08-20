import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spyOnComponentMethod } from 'sinon-spy-react';
import PostBox from '../../public/scripts/PostBox.js';

describe('<PostBox />', () => {
  const wrapper = shallow(< PostBox / >);

  it('renders a div tag', () => {
    const actual = wrapper.find('div');
    const expected = 1;
    expect(actual).to.be.length(expected);
  });

  it('renders a title', () => {
    const actual = wrapper.find('h1');
    const expected = 1;
    expect(actual).to.be.length(expected);
  });

  it('contains a <PostList /> component', () => {
    expect(wrapper.find('PostList')).to.have.length(1);
  });

  it('contains a <PostForm /> component', () => {
    expect(wrapper.find('PostForm')).to.have.length(1);
  });

  it('data has an empty initial state', () => {
    expect(wrapper.state().data).to.be.empty;
  });

  it('calls componentDidMount', () => {
    spyOnComponentMethod(PostBox, 'componentDidMount');
    const wrapperMount = mount(< PostBox / >);
    expect(PostBox.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
