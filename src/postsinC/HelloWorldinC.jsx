import "../App.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import helloworldinc from "../images/Hello World in C.png";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Highlight from "react-highlight";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import LeftSidebarforC from "../components/leftsidebarforC";
import RightSidebarforC from "../components/rightsidebarforC";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";

const helloWorld = helloworldinc;

// FAQ Questions and Answers Components

const FAQquestion = [
  {
    id: 1,
    question: "1. What is HFC ?",
    answercode: ``,
    answer: "HFC is a resource website for Programmers.",
  },
  {
    id: 2,
    question: "2. Full-form of HFC ?",
    answercode: ``,
    answer: "The Full-form of HFC is Help For Coders.",
  },
  {
    id: 3,
    question: "3. Why HFC ?",
    answercode: ``,
    answer:
      "HFC Provides the Content that is Jargon free and easy to Understand for Beginners.free and easy to Understand for Beginners.",
  },
  {
    id: 4,
    question: "4. FAQ Question 4 ?",
    answercode: `#include<stdio.h>

void main()
{
    printf("Hello World ");
    printf("Welcome to HFC");
}`,
    answer: "This is the Program for Hello World",
  },
  {
    id: 5,
    question: "5. FAQ Question 5 ?",
    answercode: ``,
    answer: "FAQ Answer for Question 5",
  },
];

const FAQquestnans = ({ question, answer, answercode }) => {
  const [showFaq, setShowFaq] = useState(false);
  return (
    <>
      <div className="faq_qnaset_post">
        <div className="faq_question_post">
          <p onClick={() => setShowFaq(!showFaq)}>
            {showFaq ? (
              <RemoveOutlinedIcon className="faq_answer_btn" />
            ) : (
              <AddIcon className="faq_answer_btn" />
            )}
          </p>
          <h2>{question}</h2>
        </div>
        {showFaq && (
          <>
            <div className="faq_answer_post">
              <pre>
                <code>{answercode}</code>
              </pre>
              <br />
              <p>{answer}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const HelloWorldinC = () => {
  const [copied, setCopied] = useState(false);
  const [faqData, setFaqData] = useState(FAQquestion);
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c">
          <p className="post_path">
            Programs in C Language &gt; Basic Programs
          </p>
          <hr className="post_path_hr" />
          <h1 className="c_post_title">
            Hello World in C || Basic Programs || C Programming
          </h1>
          <div className="c_post_image_cotainer">
            <img
              className="c_post_image"
              src={helloWorld}
              alt="Hello World in C || Basic Programs || C Programming"
            />
          </div>
          <br />
          <br />
          <p className="c_post_description">
            Here we are going to see how to print a message of Hello World on
            the screen using C Programming Language.
          </p>

          <div>
            <CopyToClipboard
              text={`#include <stdio.h>

void main()
{
    printf("Hello World ");
    printf("Welcome to HFC");
}`}
              onCopy={() => setCopied(true)}
            >
              <button class="copy_code_btn">
                <ContentCopyIcon style={{ fontSize: "inherit" }} /> Code
              </button>
            </CopyToClipboard>
            {copied ? <span className="copied_msg">Copied!</span> : null}
          </div>

          <div id="hello_wolrd_in_c" className="code_snippet">
            <pre>
              <code>
                <Highlight className="c">
                  {`#include <stdio.h>

void main()
{
    printf("Hello World ");
    printf("Welcome to HFC");
}`}
                </Highlight>
              </code>
            </pre>
          </div>

          <p className="c_post_description">
            Here we are going to see how to print a message of Hello World on
            the screen using C Programming Language.
          </p>

          <br />
          <br />

          <div className="enjoy_coding">
            <span>#ENJOY CODING</span>
          </div>

          <br />
          <br />

          <hr style={{ color: "#ffb800" }} />

          <div className="faq_section_post">
            <h2 className="faq_heading_post">
              <QuestionAnswerIcon style={{ fontSize: "2.5rem" }} /> Questions
              Related to this Post
            </h2>

            {faqData.map((currQuest) => {
              const { id } = currQuest;
              return <FAQquestnans key={id} {...currQuest} />;
            })}
          </div>

          <div>
            <button class="button_prev_programs">
              <NavLink style={{ color: "black" }} to="/">
                &lt; Previous
              </NavLink>
            </button>
            <button class="button_next_programs">
              <NavLink style={{ color: "black" }} to="/">
                Next &gt;
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
export default HelloWorldinC;
