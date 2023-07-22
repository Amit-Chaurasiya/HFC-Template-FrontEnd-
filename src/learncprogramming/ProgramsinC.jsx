import "../App.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import LeftSidebarforC from "../components/leftsidebarforC";
import RightSidebarforC from "../components/rightsidebarforC";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";
import RightSidebarforLanguagePages from "../components/rightsidebarforLanguages";

const Programlists = [
  {
    id: 1,
    title: "Basic Programs",
    programTitles: [
      {
        titles: "Hello World",
        links: "/2021/05/hello-world-in-c.html",
      },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 2,
    title: "Arithmetic Programs",
    programTitles: [
      { titles: "Addition of Two Numbers", links: "/" },
      { titles: "Remainder of Two Numbers", links: "/" },
      { titles: "Fahrenheit to Celsius", links: "/" },
      { titles: "Swapping Program", links: "/" },
      { titles: "Simple Interest", links: "/" },
      { titles: "Compound Interest", links: "/" },
    ],
  },

  {
    id: 3,
    title: "if-else",
    programTitles: [
      { titles: "Vote Eligibility", links: "/" },
      { titles: "Driving License Eligibility", links: "/" },
      { titles: "Leap Year", links: "/" },
      { titles: "Even or Odd", links: "/" },
      { titles: "Profit or Loss", links: "/" },
      { titles: "FInding Roots of Quadratic Equation", links: "/" },
    ],
  },

  {
    id: 4,
    title: "switch case",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 5,
    title: "for Loop",
    programTitles: [
      { titles: "Evven Numbers from 1 to 'n'", links: "/" },
      { titles: "Sum of 'n' numbers", links: "/" },
      { titles: "Counting Sundays in a Month", links: "/" },
      { titles: "Fibonacci Number", links: "/" },
      { titles: "Finding LCM", links: "/" },
      { titles: "Factorial of a Number", links: "/" },
    ],
  },

  {
    id: 6,
    title: "while Loop",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 7,
    title: "do-while Loop",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 8,
    title: "Patterns",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 9,
    title: "Functions (Type - 1)",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 10,
    title: "Functions (Type - 2)",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 11,
    title: "Functions (Type - 3)",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 12,
    title: "Functions (Type - 4)",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 13,
    title: "Arrays in C",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Use of #02216n", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 14,
    title: "Pointers in C",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 15,
    title: "Strings in C",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 16,
    title: "Structures and Unions in C",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 17,
    title: "File Handling in C",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  },

  {
    id: 18,
    title: "Supplementary Programs in C",
    programTitles: [
      { titles: "Hello World", links: "/" },
      { titles: "Use of Variable", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
      { titles: "Taking User Input", links: "/" },
    ],
  }
];

const CprogramsLists = ({ title, programTitles }) => {
  const [showProgramList, setShowProgramList] = useState(false);
  return (
    <>
      <ul
        className="programs_list_c_ul"
        onClick={() => setShowProgramList(!showProgramList)}
      >
        <li className="topic_title_c">{title}</li>
        {showProgramList && (
          <ul>
            <li>
              {programTitles.map((data) => {
                return (
                  <li className="programs_list_c">
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

const ProgramsinC = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c">
          <p className="post_path">Learn C Programming &gt; Programs in C</p>
          <hr className="post_path_hr" />
          <h1 className="c_post_title">Programs in C Programming Language</h1>
          <br />
          {Programlists.map((currprog) => {
            const { id } = currprog;
            return <CprogramsLists key={id} {...currprog} />;
          })}

          <button className="btn_notes_for_c" style={{ float: "right" }}>
            <NavLink to="/Notes_of_C">
              <span className="notes_for_c">Notes for C &gt;&gt;</span>
            </NavLink>
          </button>
        </div>
        {/* <RightSidebarforC /> */}
        <RightSidebarforLanguagePages/>
      </div>

      <ScrolltoTop />
      <Footer />
    </>
  );
};

export default ProgramsinC;
