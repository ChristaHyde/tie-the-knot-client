import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from "../../components/NavBar";
import PrivateRoute from "../../components/PrivateRoute";
import Profile from "../../components/Profile";

import Homepage from '../homepage'

export default function App({ foo }) {
  return <BrowserRouter>
    <header>
      <NavBar />
    </header>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <PrivateRoute path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
}
