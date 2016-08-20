var React = require('react');
var ReactDOM = require('react-dom');
var Post = require('./Post.js');
var PostBox = require('./PostBox.js');
var PostList = require('./PostList.js');
var PostForm = require('./PostForm');

ReactDOM.render(
  <PostBox url="http://localhost:3000/api/posts" pollInterval={2000} />,
  document.getElementById('app')
);
