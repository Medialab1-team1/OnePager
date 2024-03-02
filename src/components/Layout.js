import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">
      <header></header>
      <nav className="actions">
        <ul>
          <li>
            <Link to="/">Add menu items here</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
