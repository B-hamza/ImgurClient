var ReactRouter = require('react-router');
var Router = ReactRouter.Router; // the actual Router to route the pages
var Route = ReactRouter.Route;// configure the Router

module.exports = (
  <Router>
    <Route path="/" component={Hello}>
      <Route path="1" component={Child1}>
        <Route path="2" component={Child2} />
      </Route>
    </Route>
  </Router>
)
