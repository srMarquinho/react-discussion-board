var React = require('react');
var $ = require('jquery');
var PostList = require('./PostList.js');
var PostForm = require('./PostForm');

var PostBox = React.createClass({

  getUrl: function() {
    return this.props.url;
  },

  loadPostsFromServer: function() {
    $.ajax({
      url: this.getUrl(),
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },

  handlePostSubmit: function(post) {
    var posts = this.state.data;
    post.id = Date.now();
    var newPosts = posts.concat([post]);
    this.setState({data: newPosts});
    $.ajax({
      url: this.getUrl(),
      dataType: 'json',
      type: 'POST',
      data: post,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="postBox">
        <h1>Say hi with React!</h1>
        <PostList data={this.state.data} />
        <PostForm onPostSubmit={this.handlePostSubmit} />
      </div>
    );
  }
});

module.exports = PostBox
