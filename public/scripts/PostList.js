var React = require('react');
var Post = require('./Post.js');

var PostList = React.createClass({

  dataColector: function() {
    return this.props.data;
  },

  render: function() {
    var postNodes = this.dataColector().map(function(post) {
      return (
        <Post author={post.author} key={post.id}>
          {post.text}
        </Post>
      );
    });

    return (
      <div className="postList">
        {postNodes}
      </div>
    );
  }
});

module.exports = PostList
