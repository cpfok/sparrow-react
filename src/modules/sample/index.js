import React from 'react';
import ReactDom, {render} from 'react-dom';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  Redirect
} from 'react-router';
import Routes from './Routes'

class Main extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        {Routes}
      </Router>
    )
  }
}
render(
  <Main/>,
  document.getElementById('application')
)
