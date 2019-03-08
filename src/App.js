import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz'
import AddNew from './AddNew'
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Switch, Route } from 'react-router'

class App extends Component {
  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Quiz}/>
          <Route path="/add-new" component={AddNew}/>
        </Switch>
      </Router>
    )
  }
}

export default App




