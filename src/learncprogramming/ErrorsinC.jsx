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

const ErrorLists = [
  {
    id: 1,
    title: "Basic Errors",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 2,
    title: "Arithmetic Errors",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 3,
    title: "Conditional Statements Errors",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 4,
    title: "Loops Errors",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 5,
    title: "Functions Errors",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 6,
    title: "Errors in Arrays",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 7,
    title: "Errors in Pointers",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 8,
    title: "Errors on String",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 9,
    title: "Structures and Unions Errors",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },

  {
    id: 10,
    title: "File Handling Errors",
    errorTitles: [
      {
        titles: "Error 1",
        links: "/",
      },
      { titles: "Error 2", links: "/" },
      { titles: "Error 3", links: "/" },
    ],
  },
];

const CerrorLists = ({ title, errorTitles }) => {
  const [showErrorList, setShowErrorList] = useState(false);
  return (
    <>
      <ul
        className="programs_list_c_ul"
        onClick={() => setShowErrorList(!showErrorList)}
      >
        <li className="error_topic_title_c">{title}</li>
        {showErrorList && (
          <ul>
            <li>
              {errorTitles.map((data) => {
                return (
                  <li className="errors_list_c programs_list_c">
                    {/* <a href={data.links}>{data.titles}</a> */}
                    <NavLink to={data.links}>{data.titles}</NavLink>
                  </li>
                );
              })}
            </li>
          </ul>
        )}
      </ul>
    </>
  );
};

const ErrorsinC = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c concepts_in_c">
          <p className="post_path">
            Learn C Programming &gt; Solve your Errors
          </p>
          <hr className="post_path_hr" />
          <h1 className="c_post_title">Errors in C Programming Language</h1>
          <br />
          {ErrorLists.map((currprog) => {
            const { id } = currprog;
            return <CerrorLists key={id} {...currprog} />;
          })}
          <br />
          <br />
          <br />
          <button className="btn_notes_for_c" style={{ float: "right" }}>
            <NavLink to="/Compiler_of_C">
              <span className="notes_for_c">
                Online Compiler for C &gt;&gt;
              </span>
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

export default ErrorsinC;
