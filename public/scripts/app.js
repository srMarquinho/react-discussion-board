import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';
import PostBox from './PostBox.js';
import PostList from './PostList.js';
import PostForm from './PostForm';

ReactDOM.render(
  <PostBox url="http://localhost:3000/api/posts" pollInterval={2000} />,
  document.getElementById('app')
);
