var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

module.exports = function SearchResult(props){
  console.log('result2 = ', props.location.state.result);
  var result = JSON.parse(props.location.state.result);
  console.log('parsing result = ', result);
  
  return(
    <div>
      <h1>Title: {result.Title}</h1>
      <h1>Year: {result.Year}</h1>
      <h1>imdbRating: {result.imdbRating}</h1>
      <h1>Actors: {result.Actors}</h1>
      <h1>Plot: {result.Plot}</h1>
      <Link to='/form'>Back</Link>
    </div>
  )
}