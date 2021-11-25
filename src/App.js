import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Routes from './components/routing/Routes'

// redux
import { Provider } from "react-redux"
import store from "./store"

import './assets/styles/tailwind.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </>
      </Router>
    </Provider>
  )
}

export default App;
