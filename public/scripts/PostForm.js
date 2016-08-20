import React from 'react';

const PostForm = React.createClass({

  getInitialState: function () {
    return { author: '', text: '' };
  },

  handleAuthorChange: function (e) {
    this.setState({ author: e.target.value });
  },

  handleTextChange: function (e) {
    this.setState({ text: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }

    this.props.onPostSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  },

  render: function () {
    return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        <input
          id="input-name"
          type="text"
          placeholder="Name (or aka)"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
      <br></br>
      <textarea
          id="textarea-comment"
          rows="4"
          cols="50"
          type="text"
          placeholder="Your comments..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      <br></br>
        <input
          id="button"
          type="submit"
          value="Post"
        />
      </form>
    );
  },
});

module.exports = PostForm;
