import "../App.css";
import React, { useState } from "react";
import LearnC from "../images/Learn C Programming.png";
import { NavLink, Link } from "react-router-dom";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import LeftSidebarforC from "../components/leftsidebarforC";
import RightSidebarforC from "../components/rightsidebarforC";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";

const learnC = LearnC;

const WhatisC = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c">
          <p className="post_path">Learn C Programming &gt; What is C ?</p>
          <hr className="post_path_hr" />
          <h1 className="c_post_title">What is C ?</h1>
          <div className="c_post_image_cotainer">
            <img className="c_post_image" src={learnC} alt="Post Image" />
          </div>
          <br />
          <p className="c_post_content">
            The C programming is one of the oldest programming language and also
            known as the mother of all languages. This language has given roots
            to many other programming languages, many languages have been built
            with the help of the basics of C, Examples of such languages are
            C++, Python etc. The C language is developed by Dennis Ritchie at
            AT&T Bell Laboratories, in 1972. Before C there was another language
            named 'B' Language, Many features of the C language were derived
            from an earlier language B, which was developed by Ken Thompson in
            1970. C is a procedural programming language. It was initially
            developed as a system programming language to write operating
            system. The main features of C language include low-level access to
            memory, simple set of keywords, and clean style, these features make
            C language suitable for system programming like operating system or
            compiler development.
            <br />
            <br />
            Applications of C Programming.
            <br />
            <br />
            <ul>
              <li>
                * For Designing the system software like operating system and
                Compiler.
              </li>
              <li>
                * To develop application software like database and spread
                sheets.
              </li>
              <li>
                * For Developing Graphical related application like computer and
                mobile games.
              </li>
              <li>
                * Some parts of games like PUBG and BGMI are also developed with
                the help of C coding language.
              </li>
              <li>* Developing Modern Programs</li>
              <li>* Databases development and management</li>
              <li>* Language Interpreters</li>
            </ul>
            Focusing on the importance and the need of C language Help for
            coders provides a completely free online tutorials on C programming
            for beginners so that they should get an idea that how to create
            program in C language as this language has a lot of syntax stuffs we
            provide multiple examples on each and every topic of C program and
            coding. We also have our own online compiler for fast and accurate
            compiling and executions of C programs so that everyone learning
            here should get a complete experience of learning C coding and their
            implementation and practice at same place. We also provide special
            HFC notes typed by Engineers to enhance your understanding.
          </p>

          <p className="c_post_content" style={{ color: "red" }}>
            Course Outcomes:-
            <ul>
              <p style={{color:"black"}}>
                Before proceeding with this tutorial, you should have a basic
                understanding of Computer Programming Terminologies. A basic
                understanding of any of the Programming Languages will help you
                in understanding the C Programming concepts and move fast on the
                learning track.
              </p>
            </ul>
            <br />
            <br />
            Pre-requisite:-
            <ul>
              <p style={{color:"black"}}>
                Before proceeding with this tutorial, you should have a basic
                understanding of Computer Programming Terminologies. A basic
                understanding of any of the Programming Languages will help you
                in understanding the C Programming concepts and move fast on the
                learning track.
              </p>
            </ul>
            <br />
            <br />
          </p>
          <div>
            <button className="btn_get_started">
              <NavLink to="/Concepts_in_C">
                <span className="get_started">Get Started &gt;&gt;</span>
              </NavLink>
            </button>
          </div>
        </div>
        <RightSidebarforC />
      </div>

      <ScrolltoTop />
      <Footer />
    </>
  );
};

export default WhatisC;
