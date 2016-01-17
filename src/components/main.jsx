var React = require('react');
var Header = require('./header')

module.exports = React.createClass({
  render: function() {

    return <h1>
      <Header />
      {this.props.children}
    </h1>
  }
});
