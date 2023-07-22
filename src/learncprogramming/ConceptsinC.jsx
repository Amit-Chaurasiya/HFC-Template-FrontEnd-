import "../App.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import LeftSidebarforC from "../components/leftsidebarforC";
import RightSidebarforC from "../components/rightsidebarforC";
import RightSidebarforLanguagePages from "../components/rightsidebarforLanguages";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";

const ConceptsinC = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c concepts_in_c">
          <p className="post_path">Learn C Programming &gt; Concepts in C</p>
          <hr className="post_path_hr" />
          <h1 className="c_post_title">Concepts in C Programming Language</h1>
          <br />
          <ul>
            <li className="concept_list_c">
              <Link to="/">Variables, Keywords and Datatypes in C</Link>
            </li>
            <li className="concept_list_c">
              <Link to="/">Conditional Statements in C</Link>
            </li>
            <li className="concept_list_c">
              <Link to="/">Loop in C</Link>
            </li>
            <li className="concept_list_c">
              <Link to="/">Functions in C</Link>
            </li>
            <li className="concept_list_c">
              <Link to="/">Arrays in C</Link>
            </li>
            <li className="concept_list_c">
              <Link to="/">Pointers in C</Link>
            </li>
            <li className="concept_list_c">
              <Link to="/">String Manipulation in C</Link>
            </li>
            <li className="concept_list_c">
              <Link to="/">Structures and Unions in C</Link>
            </li>
            <li className="concept_list_c">
              <Link to="/">File Handling in C</Link>
            </li>
          </ul>
          <br />
          <br />
          <button className="btn_programs_in_c" style={{ float: "right" }}>
            <NavLink to="/Programs_in_C">
              <span className="programs_in_c">Programs in C &gt;&gt;</span>
            </NavLink>
          </button>
        </div>

        <RightSidebarforLanguagePages />
      </div>

      <ScrolltoTop />
      <Footer />
    </>
  );
};

export default ConceptsinC;
