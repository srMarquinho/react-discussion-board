import domSetup from '../helper/domSetup';
import Browser from 'zombie';
import { expect } from 'chai';
import React from 'react';
import PostBox from '../../public/scripts/PostBox.js';
import { stubComponentMethod } from 'sinon-spy-react';
import server from '../../serverTest';

describe('FEATURE', () => {
  stubComponentMethod(PostBox, 'getUrl').returns('api/postsTest');

  const browser = new Browser({
    site: 'http://localhost:8080',
  });
  before((done) => {
    browser.visit('/', done);
  });

  it('has status 200', () => {
    expect(browser.status).to.equal(200);
  });

  it('should show title "Say hi with React!"', () => {
    expect(browser.text('h1')).to.equal('Say hi with React!');
  });

  it('can post a comment and render in the page', () => {
    browser
      .fill('#input-name', 'Test')
      .fill('#textarea-comment', 'This is the test comment.')
      .pressButton('Post');
    expect(browser.text('.post')).to.include('Test');
    expect(browser.text('.post')).to.include('This is the test comment.');
  });
});
