import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import search from "../images/Search.png";
import hfclogo from "../images/hfclogo.png";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const Search = search;
const hfcLogo = hfclogo;

var a = 0;
function drawer() {
  if (a == 1) {
    console.log(width);
    console.log(a);
    document.getElementById("brandName").style.display = "flex";
    document.getElementById("menu_container_desktop").style.display = "none";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";

    return (a = 0);
  } else if (a == 0) {
    console.log(a);
    document.getElementById("brandName").style.display = "none";
    document.getElementById("menu_container_desktop").style.display = "flex";
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("search_close_icon").style.display = "none";
    document.getElementById("searchImg").style.display = "flex";
    return [(a = 1), (srch = 0)];
  }
}

var c = 1;
var cpp = 1;
var java = 1;
var Python = 1;
var html = 1;
var css = 1;
var js = 1;
function centered() {
  if (c == 1 && width > 1024) {
    console.log("c" + c);
    document.getElementById("cmenudrop").style.display = "grid";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (c = 0);
  } else if (c == 0 && width > 1024) {
    console.log("c" + c);
    document.getElementById("cmenudrop").style.display = "grid";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (c = 1);
  }
}

const cppentered = () => {
  if (cpp == 1 && width > 1024) {
    console.log("CPP" + cpp);
    document.getElementById("cppmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (cpp = 0);
  } else if (cpp == 0 && width > 1024) {
    console.log("CPP" + cpp);
    document.getElementById("cppmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (cpp = 1);
  }
};

const javaentered = () => {
  if (java == 1 && width > 1024) {
    console.log("java" + java);
    document.getElementById("javamenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (java = 0);
  } else if (java == 0 && width > 1024) {
    console.log("java" + java);
    document.getElementById("javamenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (java = 1);
  }
};

const pythonentered = () => {
  if (Python == 1 && width > 1024) {
    console.log("PYTHON" + Python);
    document.getElementById("pythonmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (Python = 0);
  } else if (Python == 0 && width > 1024) {
    console.log("PYTHON" + Python);
    document.getElementById("pythonmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (Python = 1);
  }
};

const htmlentered = () => {
  if (html == 1 && width > 1024) {
    console.log("html" + html);
    document.getElementById("htmlmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";

    return (html = 0);
  } else if (html == 0 && width > 1024) {
    console.log("html" + html);
    document.getElementById("htmlmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    return (html = 1);
  }
};

const cssentered = () => {
  if (css == 1 && width > 1024) {
    console.log("css" + css);
    document.getElementById("cssmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";

    return (css = 0);
  } else if (css == 0 && width > 1024) {
    console.log("css" + css);
    document.getElementById("cssmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("jsmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    return (css = 1);
  }
};

const jsentered = () => {
  if (js == 1 && width > 1024) {
    console.log("js" + js);
    document.getElementById("jsmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    return (js = 0);
  } else if (js == 0 && width > 1024) {
    console.log("js" + js);
    document.getElementById("jsmenudrop").style.display = "grid";
    document.getElementById("cmenudrop").style.display = "none";
    document.getElementById("javamenudrop").style.display = "none";
    document.getElementById("cppmenudrop").style.display = "none";
    document.getElementById("pythonmenudrop").style.display = "none";
    document.getElementById("cssmenudrop").style.display = "none";
    document.getElementById("htmlmenudrop").style.display = "none";
    return (js = 1);
  }
};

const cleft = () => {
  document.getElementById("cmenudrop").style.display = "none";
};

const cppleft = () => {
  document.getElementById("cppmenudrop").style.display = "none";
};

const javaleft = () => {
  document.getElementById("javamenudrop").style.display = "none";
};

const pythonleft = () => {
  document.getElementById("pythonmenudrop").style.display = "none";
};

const htmlleft = () => {
  document.getElementById("htmlmenudrop").style.display = "none";
};

const cssleft = () => {
  document.getElementById("cssmenudrop").style.display = "none";
};

const jsleft = () => {
  document.getElementById("jsmenudrop").style.display = "none";
};

let width = window.innerWidth;

function allleft() {
  document.getElementById("cmenudrop").style.display = "none";
  document.getElementById("cppmenudrop").style.display = "none";
  document.getElementById("javamenudrop").style.display = "none";
  document.getElementById("pythonmenudrop").style.display = "none";
  document.getElementById("htmlmenudrop").style.display = "none";
  document.getElementById("cssmenudrop").style.display = "none";
  document.getElementById("jsmenudrop").style.display = "none";
}

var srch = 0;
const showSearch = () => {
    console.log(width);
    if (srch == 0 || (srch == 0 && a == 0)) {
      console.log("SRCH" + srch);
      document.getElementById("menu_container_desktop").style.display = "none";
      document.getElementById("brandName").style.display = "grid";
      document.getElementById("search-bar").style.display = "grid";
      document.getElementById("search_close_icon").style.display = "grid";
      document.getElementById("searchImg").style.display = "none";
      document.getElementById("cmenudrop").style.display = "none";
      document.getElementById("cppmenudrop").style.display = "none";
      document.getElementById("pythonmenudrop").style.display = "none";
      document.getElementById("javamenudrop").style.display = "none";
      document.getElementById("cssmenudrop").style.display = "none";
      document.getElementById("jsmenudrop").style.display = "none";
      document.getElementById("htmlmenudrop").style.display = "none";
      return [(srch = 1), (a = 0)];
    }
};

const closeSearch = () => {
    if (srch == 1) {
      console.log("srch" + srch);
      document.getElementById("search-bar").style.display = "none";
      document.getElementById("search_close_icon").style.display = "none";
      document.getElementById("searchImg").style.display = "grid";
      document.getElementById("search-bar").value = "";
      return [(srch = 0), (a = 0)];
    }
};

const NavbarDesktop = () => {
  return (
    <>
      <header>
        <div className="nav_desktop_container" onMouseEnter = {allleft}>
          <div className="logo_nav_container">
            <img src={hfcLogo} alt="HFC Logo" className="hfc_logo" />
            <h2 className="menu_opener" onClick={drawer}>
              &gt;
            </h2>
          </div>
          <Link to="/" className="hfc_brand_name" id="brandName">
            Help For Coders
          </Link>
          <form id="search-bar" action={"/"} role="search">
            <input
              id="searchBox"
              autoComplete="off"
              type="search"
              placeholder="Search. . ."
              spellCheck="false"
            />
            <button type="submit" value="Search">
              Search
            </button>
            <CloseIcon id="search_close_icon" onClick={closeSearch} />
          </form>
          <div className="search_img_container">
            <img
              src={Search}
              alt="search"
              className="search_icon"
              id="searchImg"
              onClick={showSearch}
            />
          </div>
          <nav>
            <div className="menu_container" id="menu_container_desktop">
              <ul>
                <li onMouseEnter = {allleft}>
                  <Link to="/">Home</Link>
                </li>
                <li className="menu_dropdown" onMouseEnter = {centered}>
                  <Link to="/">C <KeyboardArrowDownSharpIcon/></Link>
                  <ul className="dropdown" id = "cmenudrop" onMouseLeave = {cleft}>
                    <li><Link to="/">Learn C Programming</Link></li>
                    <li><Link to="/">Online Compiler for C</Link></li>
                    <li><Link to="/">Notes for C</Link></li>
                    <li><Link to="/">Download IDE for C</Link></li>
                  </ul>
                </li>

                <li className="menu_dropdown" onMouseEnter = {cppentered}>
                  <Link to="/">C++ <KeyboardArrowDownSharpIcon/></Link>
                  <ul className="dropdown" id = "cppmenudrop" onMouseLeave = {cppleft}>
                    <li><Link to="/">Learn C++ Programming</Link></li>
                    <li><Link to="/">Online Compiler for C++</Link></li>
                    <li><Link to="/">Notes for C++</Link></li>
                    <li><Link to="/">Download IDE for C++</Link></li>
                  </ul>
                </li>

                <li className="menu_dropdown" onMouseEnter = {javaentered}>
                  <Link to="/">Java <KeyboardArrowDownSharpIcon/></Link>
                  <ul className="dropdown" id = "javamenudrop" onMouseLeave = {javaleft}>
                    <li><Link to="/">Learn Java Programming</Link></li>
                    <li><Link to="/">Online Compiler for Java</Link></li>
                    <li><Link to="/">Notes for Java</Link></li>
                    <li><Link to="/">Download IDE for Java</Link></li>
                  </ul>
                </li>

                <li className="menu_dropdown" onMouseEnter = {pythonentered}>
                  <Link to="/">Python <KeyboardArrowDownSharpIcon/></Link>
                  <ul className="dropdown" id = "pythonmenudrop" onMouseLeave = {pythonleft}>
                  <li><Link to="/">Coming Soon...</Link></li>
                  </ul>
                </li>

                <li className="menu_dropdown" onMouseEnter = {htmlentered}>
                  <Link to="/">HTML <KeyboardArrowDownSharpIcon/></Link>
                  <ul className="dropdown" id = "htmlmenudrop" onMouseLeave = {htmlleft}>
                  <li><Link to="/">Coming Soon...</Link></li>
                  </ul>
                </li>

                <li className="menu_dropdown" onMouseEnter = {cssentered}>
                  <Link to="/">CSS <KeyboardArrowDownSharpIcon/></Link>
                  <ul className="dropdown" id = "cssmenudrop" onMouseLeave = {cssleft}>
                  <li><Link to="/">Coming Soon...</Link></li>
                  </ul>
                </li>

                <li className="menu_dropdown" onMouseEnter = {jsentered}>
                  <Link to="/">JS <KeyboardArrowDownSharpIcon/></Link>
                  <ul className="dropdown" id = "jsmenudrop" onMouseLeave = {jsleft}>
                    <li><Link to="/">Coming Soon...</Link></li>
                  </ul>
                </li>

                <li onMouseEnter = {allleft}>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavbarDesktop;
