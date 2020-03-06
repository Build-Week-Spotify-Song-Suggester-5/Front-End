import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";

// TODO Need to update the NavMenu to reflect the correct endpoints, and routing.

const Nav = props => {
  const logOut = () => {
    localStorage.clear();
    props.history.push("/");
  };

  if (localStorage.getItem("token")) {
    // We're logged in
    return (
      <header className="nav_bar">
        <label className="menu-icon" htmlFor="menu-btn">
          <div className="logo">
            <a className='anchor'
              rel="noopener noreferrer"
              href=""
            >
              Songs
            </a>
          </div>
        </label>
        <ul className="menu">
          <li className="link">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          {/* <li className="link">
           <NavLink  to="/search">Search</NavLink>
          </li> 
          <li className="link">
            <NavLink  to="/testsearch">TestSearch</NavLink>
          </li>  */}

          {/* TODO Need to get endpoint to Marketing page */}
          <li className="link">
            <NavLink to="/" onClick={logOut}>
              Logout
            </NavLink>
          </li>
        </ul>
      </header>
    );
  } else {
    // Unauthenticated user
    // STRETCH: Add page to "Get Involved"
    return (
      <div className='navbar'>
        <nav>
          <NavLink to='/'>Sign Out</NavLink>
          <NavLink to='/dashboard'>Dashboard</NavLink>
          <NavLink to='https://build-week-spotify-song-suggester-5.github.io/Marketing-UI/'>Home</NavLink>
        </nav>
      </div>
    );
  }
};

export default withRouter(Nav);