import React from "react";

import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/fridge">Fridge</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
