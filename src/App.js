import React from "react";
import NavBar from "./components/NavBar";
// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
// NEW - import the PrivateRoute component
import PrivateRoute from "./components/PrivateRoute";
////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          {/* NEW - Modify the /profile route to use PrivateRoute instead of Route */}
         <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;