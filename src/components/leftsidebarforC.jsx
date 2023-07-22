import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const LeftSidebarforC = () => {
  return (
    <>
      <div className="left_sidebar_container">
        <div className="left_navigation_learn_c">
          <ul>
            <NavLink exact activeClassName="left_nav_active" to="/What_is_C">
              <li className="left_nav_links">What is C ?</li>
            </NavLink>

            <NavLink activeClassName="left_nav_active" to="/Concepts_in_C">
              <li className="left_nav_links"> Basic Concepts in C Language</li>
            </NavLink>

            <NavLink activeClassName="left_nav_active" to="/Programs_in_C">
              <li className="left_nav_links">Programs in C Language</li>
            </NavLink>

            <NavLink activeClassName="left_nav_active" to="/Notes_of_C">
              <li className="left_nav_links">Notes for C Language</li>
            </NavLink>

            <NavLink activeClassName="left_nav_active" to="/quizes-for-c.html">
              <li className="left_nav_links">Test your Skills</li>
            </NavLink>

            <NavLink activeClassName="left_nav_active" to="/errors_in_C">
              <li className="left_nav_links">Solve your Errors</li>
            </NavLink>

            <NavLink activeClassName="left_nav_active" to="/Compiler_of_C">
              <li className="left_nav_links">Online Compiler for C</li>
            </NavLink>

            <a href="/">
              <li className="left_nav_links">Download IDE for C</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSidebarforC;
