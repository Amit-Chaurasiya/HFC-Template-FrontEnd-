import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import search from "../images/Search.png";
import CloseIcon from "@mui/icons-material/Close";

const Search = search;

var a = 1;
const drawer = () => {
  if (a == 1) {
    console.log(width);
    console.log(a);
    document.getElementById("drawer-mobile").style.display = "grid";
    document.getElementById("Cdropdown").style.display = "grid";
    document.getElementById("Cppdropdown").style.display = "grid";
    document.getElementById("Javadropdown").style.display = "grid";
    document.getElementById("Pythondropdown").style.display = "grid";
    document.getElementById("Htmldropdown").style.display = "grid";
    document.getElementById("Cssdropdown").style.display = "grid";
    document.getElementById("Jsdropdown").style.display = "grid";
    document.getElementById("Cdropdownmenu").style.display = "none";
    document.getElementById("Cppdropdownmenu").style.display = "none";
    document.getElementById("Javadropdownmenu").style.display = "none";
    document.getElementById("Pythondropdownmenu").style.display = "none";
    document.getElementById("Htmldropdownmenu").style.display = "none";
    document.getElementById("Cssdropdownmenu").style.display = "none";
    document.getElementById("Jsdropdownmenu").style.display = "none";
    document.getElementById("search_bar_mobile").style.display = "none";
    document.getElementById("brand_name_mobile").style.display = "grid";
    document.getElementById("close_icon_mobile").style.display = "none";
    document.getElementById("searchImg").style.display = "grid";
    document.getElementById("search_bar_mobile").value = "";
    return [(a = 0), (srch = 0)];
  } else if (a == 0) {
    console.log(a);
    document.getElementById("brand_name_mobile").style.display = "inline";
    document.getElementById("drawer-mobile").style.display = "none";
    document.getElementById("searchBoxMobile").style.display = "none";
    document.getElementById("searchImg").style.display = "block";
    document.getElementById("search_bar_mobile").style.display = "none";
    document.getElementById("close_icon_mobile").style.display = "none";
    return [(a = 1), (srch = 0)];
  }
};

let width = window.innerWidth;

var cm = 0;
const cmob = () => {
  if (cm == 0) {
    document.getElementById("Cdropdownmenu").style.display = "flex";
    return (cm = 1);
  } else if (cm == 1) {
    document.getElementById("Cdropdownmenu").style.display = "none";
    return (cm = 0);
  }
};

var cppm = 0;
const cppmob = () => {
  if (cppm == 0) {
    document.getElementById("Cppdropdownmenu").style.display = "flex";
    return (cppm = 1);
  } else if (cppm == 1) {
    document.getElementById("Cppdropdownmenu").style.display = "none";
    return (cppm = 0);
  }
};

var javam = 0;
const javamob = () => {
  if (javam == 0) {
    document.getElementById("Javadropdownmenu").style.display = "flex";
    return (javam = 1);
  } else if (javam == 1) {
    document.getElementById("Javadropdownmenu").style.display = "none";
    return (javam = 0);
  }
};

var pythonm = 0;
const pythonmob = () => {
  if (pythonm == 0) {
    document.getElementById("Pythondropdownmenu").style.display = "flex";
    return (pythonm = 1);
  } else if (pythonm == 1) {
    document.getElementById("Pythondropdownmenu").style.display = "none";
    return (pythonm = 0);
  }
};

var htmlm = 0;
const htmlmob = () => {
  if (htmlm == 0) {
    document.getElementById("Htmldropdownmenu").style.display = "flex";
    return (htmlm = 1);
  } else if (htmlm == 1) {
    document.getElementById("Htmldropdownmenu").style.display = "none";
    return (htmlm = 0);
  }
};

var cssm = 0;
const cssmob = () => {
  if (cssm == 0) {
    document.getElementById("Cssdropdownmenu").style.display = "flex";
    return (cssm = 1);
  } else if (cssm == 1) {
    document.getElementById("Cssdropdownmenu").style.display = "none";
    return (cssm = 0);
  }
};

var jsm = 0;
const jsmob = () => {
  if (jsm == 0) {
    document.getElementById("Jsdropdownmenu").style.display = "flex";
    return (jsm = 1);
  } else if (jsm == 1) {
    document.getElementById("Jsdropdownmenu").style.display = "none";
    return (jsm = 0);
  }
};

var srch = 0;
const showSearch = () => {
  console.log(width);
  if (srch == 0 || (srch == 0 && a == 0)) {
    console.log("SRCH" + srch);
    document.getElementById("drawer-mobile").style.display = "none";
    document.getElementById("brand_name_mobile").style.display = "none";
    document.getElementById("search_bar_mobile").style.display = "grid";
    document.getElementById("searchBoxMobile").style.display = "grid";
    document.getElementById("close_icon_mobile").style.display = "block";
    document.getElementById("searchImg").style.display = "none";
    return [(srch = 1), (a = 1)];
  }
};

const closeSearch = () => {
  if (srch == 1) {
    console.log("srch" + srch);
    document.getElementById("search_bar_mobile").style.display = "none";
    document.getElementById("brand_name_mobile").style.display = "grid";
    document.getElementById("close_icon_mobile").style.display = "none";
    document.getElementById("searchImg").style.display = "grid";
    document.getElementById("search_bar_mobile").value = "";
    return [(srch = 0), (a = 1)];
  }
};

const MobileNavbar = () => {
  return (
    <>
      <div className="main-nav-mobile">
        <div style={{ position: "fixed", zIndex: "1" }}>
          <div className="mobile_menu_container main-nav-mobile">
            <h2 className="menu_list_mobile" onClick={drawer}>
              &gt;
            </h2>
            <a href="/" className="brand_name_mobile" id="brand_name_mobile">
              Help For Coders
            </a>
            <form
              id="search_bar_mobile"
              action={"/"}
              role="search"
              className="hide"
            >
              <input
                id="searchBoxMobile"
                autoComplete="off"
                type="search"
                placeholder="Search. . ."
                spellCheck="false"
              />
              <button type="submit" value="Search">
                Search
              </button>
              <CloseIcon id="close_icon_mobile" onClick={closeSearch} />
            </form>
            <img
              src={Search}
              alt="search"
              className="search_icon_mobile"
              id="searchImg"
              onClick={showSearch}
            />
          </div>
          <div id="drawer-mobile" style={{ display: "none" }}>
            <div className="mobile_menu">
              <div className="menu_list_mobile_container">
                <h2 className="menu_list_mobile_nav" onClick={drawer}>
                  &gt;
                </h2>
                <span href="/" className="brand_name_mobile_nav">
                  Help For Coders
                </span>
              </div>
              <ul>
                <li>
                  <div className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      Home
                    </Link>
                  </div>
                </li>

                <li>
                  <div id="Cdropdown" className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      C{" "}
                      <div className="mobile_dropdown_arrow" onClick={cmob}>
                        &#711;
                      </div>
                    </Link>
                  </div>
                  <div id="Cdropdownmenu" className="mobile_nav_dropdowns hide">
                    <ul>
                      <li>
                        <Link to="/What_is_C" style={{ color: "#ffc430" }}>
                          Learn C Programming
                        </Link>
                      </li>
                      <li>
                        <Link to="/Compiler_of_C" style={{ color: "#ffc430" }}>
                          Online C Complier
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/quizes-for-c.html"
                          style={{ color: "#ffc430" }}
                        >
                          Test your Skills
                        </Link>
                      </li>
                      <li>
                        <Link to="/errors_in_C" style={{ color: "#ffc430" }}>
                          Errors of C
                        </Link>
                      </li>
                      <li>
                        <Link to="/Notes_of_C" style={{ color: "#ffc430" }}>
                          Notes for C
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Download IDE
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div id="Cppdropdown" className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      C++{" "}
                      <div className="mobile_dropdown_arrow" onClick={cppmob}>
                        &#711;
                      </div>
                    </Link>
                  </div>
                  <div
                    id="Cppdropdownmenu"
                    className="mobile_nav_dropdowns hide"
                  >
                    <ul>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Learn C++ Programming
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Online Compiler
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Notes for C++
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Errors of C++
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Download IDE
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div id="Javadropdown" className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      Java{" "}
                      <div className="mobile_dropdown_arrow" onClick={javamob}>
                        &#711;
                      </div>
                    </Link>
                  </div>
                  <div
                    id="Javadropdownmenu"
                    className="mobile_nav_dropdowns hide"
                  >
                    <ul>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Learn Java Programming
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Online Compiler
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Notes for Java
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Errors of Java
                        </Link>
                      </li>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Download IDE
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div id="Pythondropdown" className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      Python{" "}
                      <div
                        className="mobile_dropdown_arrow"
                        onClick={pythonmob}
                      >
                        &#711;
                      </div>
                    </Link>
                  </div>
                  <div
                    id="Pythondropdownmenu"
                    className="mobile_nav_dropdowns hide"
                  >
                    <ul>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div id="Htmldropdown" className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      HTML{" "}
                      <div className="mobile_dropdown_arrow" onClick={htmlmob}>
                        &#711;
                      </div>
                    </Link>
                  </div>
                  <div
                    id="Htmldropdownmenu"
                    className="mobile_nav_dropdowns hide"
                  >
                    <ul>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div id="Cssdropdown" className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      CSS{" "}
                      <div className="mobile_dropdown_arrow" onClick={cssmob}>
                        &#711;
                      </div>
                    </Link>
                  </div>
                  <div
                    id="Cssdropdownmenu"
                    className="mobile_nav_dropdowns hide"
                  >
                    <ul>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div id="Jsdropdown" className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      JavaScript{" "}
                      <div className="mobile_dropdown_arrow" onClick={jsmob}>
                        &#711;
                      </div>
                    </Link>
                  </div>
                  <div
                    id="Jsdropdownmenu"
                    className="mobile_nav_dropdowns hide"
                  >
                    <ul>
                      <li>
                        <Link to="/" style={{ color: "#ffc430" }}>
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu_language_name">
                    <Link to="/" style={{ color: "white" }}>
                      Contact Us
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default MobileNavbar;
