import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"; // FAQ

// FAQ Questions and Answers Components

const FAQquestion = [
  {
    id: 1,
    question: "What is HFC ?",
    answer: "HFC is a resource website for Programmers.",
  },
  {
    id: 2,
    question: "Full-form of HFC ?",
    answer: "The Full-form of HFC is Help For Coders.",
  },
  {
    id: 3,
    question: "Why HFC ?",
    answer:
      "HFC PRovides the Content that is Jargon free and easy to Understand for Beginners.",
  },
  {
    id: 4,
    question: "FAQ Question 4 ?",
    answer: "FAQ Answer for Question 4",
  },
  {
    id: 5,
    question: "FAQ Question 5 ?",
    answer: "FAQ Answer for Question 5",
  },
];

const FAQquestnans = ({ question, answer }) => {
  const [showFaq, setShowFaq] = useState(false);
  return (
    <>
      <div className="faq_qnaset">
        <div className="faq_question">
          <p onClick={() => setShowFaq(!showFaq)}>
            {showFaq ? (
              <RemoveOutlinedIcon className="faq_answer_btn" />
            ) : (
              <AddIcon className="faq_answer_btn" />
            )}
          </p>
          <h2>{question}</h2>
        </div>
        {showFaq && <p className="faq_answer">{answer}</p>}
      </div>
    </>
  );
};

const FAQHome = () => {
  const [faqData, setFaqData] = useState(FAQquestion);

  return (
    <>
     <div className="faq_section faq_section_pages">
        <h2 className="faq_heading"><QuestionAnswerIcon className="sidebar_icons" />  FAQ's about HFC</h2>
        <hr style={{ color: "#ffb800" }} />
        {faqData.map((currQuest) => {
          const { id } = currQuest;
          return <FAQquestnans key={id} {...currQuest} />;
        })}
     </div>
    </>
  );
};

export default FAQHome;
