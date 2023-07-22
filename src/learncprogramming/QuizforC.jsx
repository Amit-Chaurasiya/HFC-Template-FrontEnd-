import "../App.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import LeftSidebarforC from "../components/leftsidebarforC";
import RightSidebarforLanguagePages from "../components/rightsidebarforLanguages";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";

const QuizLists = [
  {
    id: 1,
    title: "Basic Concept Quiz",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 2,
    title: "Arithmetic Quiz",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 3,
    title: "Conditional Statements Quiz",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 4,
    title: "Quiz on Loops",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 5,
    title: "Functions Quiz",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 6,
    title: "Quiz in Arrays",
    quizSets: [
      {
        titles: "Set - A",
        links: "/quiz-arrays-in-c-set-a.html",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 7,
    title: "Quiz in Pointers",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 8,
    title: "Quiz on String",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 9,
    title: "Structures and Unions Quiz",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },

  {
    id: 10,
    title: "File Handling Quiz",
    quizSets: [
      {
        titles: "Set - A",
        links: "/",
      },
      { titles: "Set - B", links: "/" },
      { titles: "Set - C", links: "/" },
    ],
  },
];

const CerrorLists = ({ title, quizSets }) => {
  const [showQuizList, setShowQuizList] = useState(false);
  return (
    <>
      <ul
        className="quiz_list_c_ul"
        onClick={() => setShowQuizList(!showQuizList)}
      >
        <li className="quiz_topic_title_c">{title}</li>
        {showQuizList && (
          <ul className="drop_quiz_c" style={{borderTop:"none", borderLeft:"3px solid #ffb800", borderRight:"1px solid #ffb800", borderBottom:"3px solid #ffb800",borderRadius:"0 0 1rem 1rem",marginTop:"-1.3rem",marginLeft:"0.5rem"}}>
            <li >
              {quizSets.map((data) => {
                return (
                  <li className="quiz_list_c">
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

const QuizesinC = () => {
  return (
    <>
      <NavbarDesktop/>
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c concepts_in_c">
          <p className="post_path">Learn C Programming &gt; Solve your Quiz</p>
          <hr className="post_path_hr" />
          <h1 className="c_post_title">Quiz in C Programming Language</h1>
          <br />
          {QuizLists.map((currprog) => {
            const { id } = currprog;
            return <CerrorLists key={id} {...currprog} />;
          })}
          <br />
          <br />
          <br />
          <button className="btn_notes_for_c" style={{ float: "right" }}>
            <NavLink to="/errors_in_C">
              <span className="notes_for_c">Errors in C &gt;&gt;</span>
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

export default QuizesinC;
