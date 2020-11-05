import React, { Component } from 'react'
import GoodBoyGallery from './GoodBoyGallery.js'
import GoodBoyCreation from './GoodBoyCreation.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {


  render() {
    return (
      <div className="searchpage-main">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <GoodBoyGallery {...routerProps} />}
            />
            <Route
              path="/create"
              exact
              render={(routerProps) => <GoodBoyCreation {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>

    )
  }
}
