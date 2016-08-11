var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

// This file holds our JSON array of turtles
var SearchForm = require('./searchform.js');
var SearchResult = require('./searchresult.js');

var App = React.createClass({ 
  getInitialState: function() {
      return {
        result: {}
      }
  },  
  
  // callback function to get the response from child(searchForm)
  onResult: function(result) {
    this.state.result = result;
    console.log('this.state.result , result = ', this.state.result, result);
  },
  render: function(){
    var IndexRoute = ReactRouter.IndexRoute;
    console.log('render: this.state.result', this.state.result);
    return (
      <Router history={hashHistory}>
        <Route path='/form' component={SearchForm} result={this.onResult}/>
        <Route path='/result' component={SearchResult} result={this.state.result}/>
      </Router>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('app'))
