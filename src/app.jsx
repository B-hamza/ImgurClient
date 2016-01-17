var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router; // the actual Router to route the pages
var Route = ReactRouter.Route;// configure the Router

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render:function() {
    return <h1>
      i'm child1
      {this.props.children}
    </h1>
  }
});

var Child2 = React.createClass({
  render:function() {
    return <h1>i'm child2 (the other child : D )</h1>
  }
});


ReactDOM.render(routes, document.querySelector('.container'));
