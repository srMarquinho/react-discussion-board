import domSetup from '../helper/domSetup.js';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import PostForm from '../../public/scripts/PostForm.js';

describe('<PostForm />', () => {
  const wrapper = shallow(<PostForm />);

  it('renders a form', () => {
    const expected = 1;
    expect(wrapper.find('form')).to.have.length(expected);
  });

  it('renders a input for the name', () => {
    const expected = 1;
    expect(wrapper.find('input #input-name')).to.have.length(expected);
  });

  it('renders a textarea for the comment', () => {
    const expected = 1;
    expect(wrapper.find('textarea #textarea-comment')).to.have.length(expected);
  });

  it('renders a submit button', () => {
    const expected = 1;
    expect(wrapper.find('input #button')).to.have.length(expected);
  });

  it('has a initial state', () => {
    expect(wrapper.state()).to.not.be.empty;
  });

  it('can handle state change on click submit', function () {
    wrapper.setState({ author: 'Test', text: 'Text test' });
    wrapper.find('#button').simulate('click');
    expect(wrapper.state('author')).to.equal('Test');
    expect(wrapper.state('text')).to.equal('Text test');
  });
});
