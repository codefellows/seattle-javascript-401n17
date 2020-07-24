import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  // <Link /> and <NavLink /> are similar but different ...
  return (
    <header>
      <h1>Routing and Composition!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink activeClassName="here" to="/stuff">Stuff</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
