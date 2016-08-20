var React = require('react');
var Remarkable = require('remarkable');

var Post = React.createClass({

  childrenColector: function() {
    return this.props.children
  },

  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.childrenColector().toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="post">
        <span className="postAuthor">
          <strong>{this.props.author} said:</strong>
        </span>
        <span id="post-text" dangerouslySetInnerHTML={this.rawMarkup()} />
        <br></br>
      </div>
    );
  }
});

module.exports = Post
