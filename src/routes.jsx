var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router; // the actual Router to route the pages
var Route = ReactRouter.Route;// configure the Router
var Main = require('./components/main')

module.exports = (
  <Router>
    <Route path="/" component={Main}>

    </Route>
  </Router>
)
