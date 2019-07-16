// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../providers/auth0";
// NEW - import the Link component
import { Link } from "react-router-dom";
// import Maps from '../components/maps/app';



const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {/* NEW - add a link to the home and profile pages */}
      {isAuthenticated && (
        <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        {/* added link for places api */}
        <Link to="/app">Search</Link>
        {/* added link to countdown */}
        <Link to="/Moment">Countdown</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;