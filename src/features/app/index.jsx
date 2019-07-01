import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Homepage from '../homepage'
import LogIn from '../log-in'

export default function App({ foo }) {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/log-in" component={LogIn} />
    </Switch>
  </BrowserRouter>
}
