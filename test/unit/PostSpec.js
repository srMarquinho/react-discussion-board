import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { stubComponentMethod } from 'sinon-spy-react';
import Post from '../../public/scripts/Post.js';

describe('<Post />', () => {
  stubComponentMethod(Post, 'childrenColector').returns('This is a markdown text.');
  const wrapper = mount(<Post />);

  it('renders a div tag', () => {
    const actual = wrapper.find('div');
    const expected = 1;
    expect(actual).to.be.length(expected);
  });

  it('renders the author name', () => {
    const actual = wrapper.find('.postAuthor');
    const expected = 1;
    expect(actual).to.be.length(expected);
  });

  it('renders the post text', () => {
    const actual = wrapper.find('#post-text');
    const expected = 1;
    expect(actual).to.be.length(expected);
  });

  it('handles markdown', () => {
    const actual = wrapper.node.rawMarkup();
    const expected = 1;
    expect(actual).not.to.be.undefined;
  });

});
