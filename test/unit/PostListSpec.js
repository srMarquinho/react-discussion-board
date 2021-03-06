import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { stubComponentMethod } from 'sinon-spy-react';
import PostList from '../../public/scripts/PostList.js';

describe('<PostList />', () => {
  stubComponentMethod(PostList, 'dataColector').returns([]);
  const wrapper = shallow(<PostList />);

  it('renders a div tag', () => {
    const actual = wrapper.find('div');
    const expected = 1;
    expect(actual).to.be.length(expected);
  });
});
