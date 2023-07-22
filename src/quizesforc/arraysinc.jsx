import React from "react";
import "../App.css";
import LeftSidebarforC from "../components/leftsidebarforC";
import MobileNavbar from "../components/navbarmobile";
import ScrolltoTop from "../components/scrolltotop";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Highlight from "react-highlight";
import RightSidebarforLanguagePages from "../components/rightsidebarforLanguages";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import NavbarDesktop from "../components/navbardesktop";

const Quizquestions = [
  {
    id: 0,
    question: "1. What is an Array in C language ?",
    reason: "reason1",
    options: [
      { option: "A group of elements of same data type." },
      { option: "An array contains more than one element" },
      {
        option:
          "Array elements are stored in memory in continuous or contiguous locations",
      },
      { option: "All of the above" },
    ],
    codesnip: "",
    quesno: "question_1",
    answer: "All of the above",
    explanation: "No Explanation.",
  },
  {
    id: 1,
    question: "2. How array is initialized in C ?",
    reason: "reason2",
    options: [
      { option: "int num[3] = {1,2,3};" },
      { option: "int num{} = {1,2,3};" },
      { option: "int num{3} = {1,2,3};" },
      { option: "int num(3) = {1,2,3};" },
    ],
    codesnip: "",
    quesno: "question_2",
    answer: "int num[3] = {1,2,3};",
    explanation:
      "The correct syntax for array initialization in C is data_type array_name[] = {array_elements}; . option B, C & D are incorrect because array declaration syntax is wrong. Only square brackets([]) must be used for declaring an array.",
  },
  {
    id: 2,
    question:
      "3. An array is a group of memory locations related by the fact that they all have the same name and the same type.",
    reason: "reason3",
    options: [{ option: "True" }, { option: "False" }],
    codesnip: "",
    quesno: "question_3",
    answer: "True",
    explanation: "No Explanation.",
  },
  {
    id: 3,
    question: "4. What is the maximum size of an array in c ?",
    reason: "reason4",
    options: [
      { option: "32" },
      { option: "16" },
      { option: "100" },
      { option: "Infinite" },
    ],
    codesnip: "",
    quesno: "question_4",
    answer: "Infinite",
    explanation: "There is no fixed limit to the size of an array in C.",
  },
  {
    id: 4,
    question:
      "5. An array elements are always stored in ______ memory location?",
    reason: "reason5",
    options: [
      { option: "Sequential" },
      { option: "Random" },
      { option: "Sequential And Random" },
      { option: "None of the above." },
    ],
    codesnip: "",
    quesno: "question_5",
    answer: "Sequential",
    explanation:
      "An array in C is a collection of items stored at contiguous memory locations and elements can be accessed randomly using indices of an array. They are used to store similar type of elements as in the data type must be the same for all elements.",
  },
  {
    id: 5,
    question: "6. An array Index starts with ?",
    reason: "reason6",
    options: [
      { option: "-1" },
      { option: "1" },
      { option: "0" },
      { option: "2" },
    ],
    codesnip: "",
    quesno: "question_6",
    answer: "0",
    explanation:
      "This means that the index is used as an offset. The first element of the array is exactly contained in the memory location that array refers,  so it should be denoted as array[0].",
  },
  {
    id: 6,
    question: "7. What will be printed after execution ?",
    reason: "reason7",
    options: [
      { option: "Garbage Value" },
      { option: "5" },
      { option: "0" },
      { option: "6" },
    ],
    codesnip: `#include <stdio.h>
void main() 
{
    int a[10] = {1,2,3,4,5};
    printf("%d",a[5]);
}`,
    quesno: "question_7",
    answer: "0",
    explanation:
      "When an array is partially initialized at the time of declaration then the remaining elements of the array is initialized to 0 by default.",
  },
  {
    id: 7,
    question: `8. Which of the following are true ?
          1. The array int num[26]; can store 26 elements.
          2. The expression num[1] designates the very first element in the array.
          3. It is necessary to initialize the array at the time of declaration."
          4. The declaration num[SIZE] is allowed if SIZE is a macro.`,
    reason: "reason8",
    options: [
      { option: "1,3" },
      { option: "1,4" },
      { option: "2,3" },
      { option: "None of the above." },
    ],
    codesnip: "",
    quesno: "question_8",
    answer: "1,4",
    explanation:
      "Statement 1 & 4 are true, statement 2 is false as indexing starts from 0 so num[1] will give the second element of the array and 3rd Statement is also false.",
  },
  {
    id: 8,
    question: "9. How to declare a 2D and 3D array in C?",
    reason: "reason9",
    options: [
      { option: "int x[2][3] , float y[2][2][3]" },
      { option: "int x{2}{3} , float y{2}{2}{3}" },
      { option: "int x(2)(3) , float y(2)(2)(3)" },
      { option: "None of the above." },
    ],
    codesnip: "",
    quesno: "question_9",
    answer: "int x[2][3] , float y[2][2][3]",
    explanation:
      "The Syntax for 2D array is data_type name[][] with 2 sqaure bracket pair([]) and for 3D is data_type name[][][] with 3 square bracket pair([]).",
  },
  {
    id: 9,
    question: "10. What is the output of C program? ",
    reason: "reason10",
    options: [
      { option: "90.5,92.5,96.5," },
      { option: "90.50,92.50,96.50," },
      { option: "0.00,0.00,0.00," },
      { option: "Compiler error" },
    ],
    codesnip: `#include <stdio.h>
int main() 
{
    float marks[3] = {90.5, 92.5, 96.5};
    int a=0;
    while(a<3) 
    {
        printf("%.2f,", marks[a]);
        a++;
    }
}`,
    quesno: "question_10",
    answer: "90.50,92.50,96.50,",
    explanation:
      "0.2%f prints only two values after decimal points. So for every iteration the output with 2 values after decimal point are printed. It is allowed to use float values with arrays.",
  },
  {
    id: 10,
    question: "11. What is the output of C program ? ",
    reason: "reason11",
    options: [
      { option: "10 12 14" },
      { option: "Error" },
      { option: "14 12 10" },
      { option: "All of the above." },
    ],
    codesnip: `int main() 
{ 
    int a[3] = {10,12,14}; 
    int i=0; 
    while(i<3) 
    { 
        printf("%d ", i[a]); 
        i++; 
    } 
}`,
    quesno: "question_11",
    answer: "10 12 14",
    explanation:
      "a[i] == i[a]. Use any notation to refer to array elements in C.",
  },
  {
    id: 11,
    question:
      "12. Which of the following is correct way to access 8th element from an array with 100 element (arr[100]) ?",
    reason: "reason12",
    options: [
      { option: "arr[8]" },
      { option: "arr{8}" },
      { option: "arr{7}" },
      { option: "arr[7]" },
    ],
    codesnip: "",
    quesno: "question_12",
    answer: "arr[7]",
    explanation:
      "Array index always starts with 0. So for accessing 8th element of array arr[7] is correct way.",
  },
  {
    id: 12,
    question: `13. What is meaning of following declaration ?
    int(*ptr)[10];`,
    reason: "reason13",
    options: [
      { option: "ptr is array of pointers to 10 integers" },
      { option: "ptr is a pointer to an array of 10 integers" },
      { option: "ptr is an array of 10 integers" },
      { option: "ptr is an pointer to array" },
    ],
    quesno: "question_13",
    answer: "ptr is a pointer to an array of 10 integers",
    explanation: "No Explanation.",
  },
  {
    id: 13,
    question: "14. What is the output of C program ?",
    reason: "reason14",
    options: [
      { option: "5" },
      { option: "16" },
      { option: "4" },
      { option: "None of the above." },
    ],
    codesnip: `#include <stdio.h>
void main() 
{ 
    int a[5] = {1,2,3,4,5}; 
    int b = sizeof(a)/sizeof(a[0]);
    printf("%d" , b);
}`,
    quesno: "question_14",
    answer: "5",
    explanation: `The variable 'a' has 5 elements. The size of the float variable is 4 bytes. Hence 5 elements x 4 bytes = 20 bytes sizeof(arr[0]) is 4 bytes
    Hence 20/4 is 5 bytes
    Hence the output of the program is '5'.`,
  },
  {
    id: 14,
    question: "15. Predict the output of C program with arrays and pointers? ",
    reason: "reason15",
    options: [
      { option: "30" },
      { option: "{1,2,3}" },
      { option: "45" },
      { option: "{{1,2,3},{4,5,6},{7,8,9}}" },
    ],
    codesnip: `#include <stdio.h>

void main()
{
    printf("Hello World ");
    printf("Welcome to HFC");
}`,
    quesno: "question_15",
    answer: "45",
    explanation:
      "The Array is a 2D array with rows and column. The 1st for loop (for(i=0;i<3;i++)) gets the row and 2nd (for(j=0;j<3;j++)) gets the column and by those values each value of the array is iterated then it is added to variable 'x' , so for every iteration the value of array will add and then give the addition of all elements in the array.",
  },
];
// const startbuttonlabel = document.getElementById("btn_start");
// const instructionslabel = document.getElementById("quiz_instructions");
const questioncontainerelement = document.getElementById("fullset");
const quiztimer = document.getElementById("timer");
const quiztimertext = document.getElementById("quiz_timer_text");
const resultcontainer = document.getElementById("quiz_results");
const submitbutton = document.getElementById("button_submit");
var counter = 0; // counter variable to count score on each correct selection

const chn = () => {
  document.getElementById("reason15").textContent =
    "Your Selected Option : " + document.getElementById("question_15").value;
  document.getElementById("reason14").textContent =
    "Your Selected Option : " + document.getElementById("question_14").value;
  document.getElementById("reason13").textContent =
    "Your Selected Option : " + document.getElementById("question_13").value;
  document.getElementById("reason12").textContent =
    "Your Selected Option : " + document.getElementById("question_12").value;
  document.getElementById("reason11").textContent =
    "Your Selected Option : " + document.getElementById("question_11").value;
  document.getElementById("reason10").textContent =
    "Your Selected Option : " + document.getElementById("question_10").value;
  document.getElementById("reason9").textContent =
    "Your Selected Option : " + document.getElementById("question_9").value;
  document.getElementById("reason8").textContent =
    "Your Selected Option : " + document.getElementById("question_8").value;
  document.getElementById("reason7").textContent =
    "Your Selected Option : " + document.getElementById("question_7").value;
  document.getElementById("reason6").textContent =
    "Your Selected Option : " + document.getElementById("question_6").value;
  document.getElementById("reason5").textContent =
    "Your Selected Option : " + document.getElementById("question_5").value;
  document.getElementById("reason4").textContent =
    "Your Selected Option : " + document.getElementById("question_4").value;
  document.getElementById("reason3").textContent =
    "Your Selected Option : " + document.getElementById("question_3").value;
  document.getElementById("reason2").textContent =
    "Your Selected Option : " + document.getElementById("question_2").value;
  document.getElementById("reason1").textContent =
    "Your Selected Option : " + document.getElementById("question_1").value;
};

// start button function
const startbutton = () => {
  chn();
  console.log("started");
  document.getElementById("btn_start").classList.add("hide");
  document.getElementById("quiz_instructions").classList.add("hide");
  document.getElementById("quiz_results").classList.add("hide");
  document.getElementById("timer").classList.remove("hide");
  document.getElementById("quiz_timer_text").classList.remove("hide");
  document.getElementById("button_submit").classList.remove("hide");
  document.getElementById("faq_quiz").classList.add("hide");
  document.getElementById("before_faq_hr_quiz").classList.add("hide");
  document.getElementById("fullset").style.display = "flex";
  var userName = document.getElementById("name").value;
  document.getElementById("quiz_user_name").textContent = userName + ",";
  console.log(userName);
  quiztime();
};

var time = 300;

const quiztime = () => {
  var quiz_Timer = setInterval(function () {
    chn();
    if (submitted === false) {
      console.log(submitted);
      if (time <= -1) {
        clearInterval(quiz_Timer);
        console.log("time's up");
        alert("Time's Up !!, your Quiz was submitted automatically!!");
        quiztimer.classList.add("hide");
        quiztimertext.classList.add("hide");
        submitbutton.classList.add("hide");
        questioncontainerelement.classList.add("hide");
        resultcontainer.classList.remove("hide");
        document.getElementById("fullset").style.display = "none";
        document.getElementById("quiz_timer_text").classList.add("hide");
        document.getElementById("timer").classList.add("hide");
        document.getElementById("quiz_results").classList.remove("hide");
        document.getElementById("button_submit").classList.add("hide");
        regards();
        console.log("Your total score is " + counter);
      }
    }
    document.getElementById("timer").value = 300 - time;
    document.getElementById("countdowntimer").textContent = time;
    time--;
  }, 1000);
};

const master = () => {
  var Questionid = [
    "question_1",
    "question_2",
    "question_3",
    "question_4",
    "question_5",
    "question_6",
    "question_7",
    "question_8",
    "question_9",
    "question_10",
    "question_11",
    "question_12",
    "question_13",
    "question_14",
    "question_15",
  ];
  console.log(Questionid);
  var finalans = [];
  var options = [
    "All of the above",
    "int num[3] = {1,2,3};",
    "True",
    "Infinite",
    "Sequential",
    "0",
    "0",
    "1,4",
    "int x[2][3] , float y[2][2][3]",
    "90.50,92.50,96.50,",
    "10 12 14",
    "arr[7]",
    "ptr is a pointer to an array of 10 integers",
    "5",
    "45",
  ];
  console.log(options.length);
  for (var i = 0; i < Questionid.length; i++) {
    console.log(document.getElementById(Questionid[i]).value);
    var anschk = document.getElementById(Questionid[i]).value;
    if (anschk === options[i]) {
      finalans.push(anschk);
      // console.log(finalans);
    }
    console.log(finalans);
    counter = finalans.length * 2;
    console.log(counter);
  }
  return counter;
};

const regards = () => {
  if (counter === 30) {
    document.getElementById("show_score").textContent =
      " Excellent !! Your score is " + counter + " 🥳🥳🥳🥳😎";
  } else if (counter < 15) {
    document.getElementById("show_score").textContent =
      " Good Try, you can do more better \n Your Score is: " +
      counter +
      " 😊😊";
  } else if (counter > 15 && counter < 30) {
    document.getElementById("show_score").textContent =
      " Good Try,Your Score is: " + counter + " 😊😊";
  }
};

var submitted = false;
const submitButton = () => {
  submitted = true;
  console.log(submitted);
  console.log(master());
  alert("Your quiz is submitted");
  document.getElementById("fullset").style.display = "none";
  document.getElementById("quiz_timer_text").classList.add("hide");
  document.getElementById("timer").classList.add("hide");
  document.getElementById("quiz_results").classList.remove("hide");
  document.getElementById("button_submit").classList.add("hide");
  regards();
};

const change = () => {
  if (
    document.getElementById("ans_explanations").className ===
    "quiz_explanation hide"
  ) {
    document.getElementById("ans_explanations").classList.remove("hide");
    document.getElementById("ans_exp").innerHTML = "Hide";
  } else {
    document.getElementById("ans_explanations").classList.add("hide");
    document.getElementById("ans_exp").innerHTML = "Show";
  }
};

const retryQuiz = () => {
  window.location.reload(true);
};

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
              <p>{answer}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const QuizonArraysinC = () => {
  const [faqData, setFaqData] = useState(FAQquestion);
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c">
          <p className="post_path">Test your Skills &gt; Arrays in C</p>
          <hr className="post_path_hr" />
          <div id="start_quiz">
            <div className="quiz_title">
              <h1>Quiz for C (Arrays)</h1>
              <p id="quiz_timer_text" className="quiz_timer hide">
                Time left: <span id="countdowntimer">300</span> seconds
              </p>
              <progress
                className="hide"
                value="0"
                max="300"
                id="timer"
              ></progress>
            </div>
          </div>
          <div id="fullset" className="hide">
            {Quizquestions.map((item) => (
              <div className="question_answer_container">
                <div className="questions">{item.question}</div>
                <div className="quiz_code_snippet">
                  <pre>{item.codesnip}</pre>
                </div>
                <hr className="hr_sep" />
                <div id="ans_btns" className="btn_grid option_container">
                  <form>
                    <h3>Select Your Option</h3>
                    <select id={item.quesno} className="dropbox">
                      <option value="--Select--" className="options">
                        --Select--
                      </option>
                      {Quizquestions[item.id].options.map((options) => (
                        <option value={options.option} className="options">
                          {options.option}
                        </option>
                      ))}
                    </select>
                    <p id={item.reason} className="reason"></p>
                  </form>
                </div>
              </div>
            ))}
          </div>
          <button className="hide" id="button_submit" onClick={submitButton}>
            Submit
          </button>

          <div id="quiz_instructions" className="instructions_container">
            <label className="user_name" for="user_name">
              Your Name:{" "}
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              autocomplete="off"
              spellCheck="false"
            />
            <br />
            <br />
            <label className="user_name">Instructions:-</label>
            <br />
            <br />
            <ol className="instructions">
              <li>1. This Quiz is based on the Arrays of C</li>
              <li>2. Each correct answer will carry 2 points</li>
              <li>
                3. Once an option is selected you cannot select any other, So
                choose wisely
              </li>
              <li>4. Do not refresh the page as it will reset the quiz</li>
              <li>
                5. Once the time is up the quiz will automatically get submitted
                with no of Question responded
              </li>
              <li>
                6. Your total score alongwith your name will be shown after
                submission of the Quiz
              </li>
              <br />
              <p>
                Wish you <strong>ALL THE BEST</strong> 👍👍
              </p>
            </ol>
            <hr className="hr_sep" />
            <br />
            <div>
              <div className="quit_quiz_container">
                <a
                  href="https://www.helpforcoders.com/p/basic-programs-in-c_28.html"
                  id="quit_quiz"
                >
                  Quit Quiz
                </a>
              </div>
              <div className="startbtn_container">
                <span id="btn_start" onClick={startbutton}>
                  START
                </span>
              </div>
            </div>
          </div>

          <hr id="before_faq_hr_quiz" />

          <div id="faq_quiz" className="faq_section_post">
            <h2 className="faq_heading_post">
              <QuestionAnswerIcon className="sidebar_icons" /> Questions Related
              to this Post
            </h2>

            {faqData.map((currQuest) => {
              const { id } = currQuest;
              return <FAQquestnans key={id} {...currQuest} />;
            })}
          </div>

          <div id="quiz_results" className="results_container hide">
            <label className="user_name">Results:-</label>
            <div className="results">
              <span>
                Hi{" "}
                <b>
                  <span id="quiz_user_name"></span>
                </b>
                <span id="show_score"></span>
              </span>
              <br />
              <p>
                Reason for Correct Answers:&nbsp;
                <span id="ans_exp" onClick={change}>
                  Show
                </span>
              </p>
            </div>
            <div id="ans_explanations" className="quiz_explanation hide">
              {Quizquestions.map((i) => (
                <div className="explanation_fullset">
                  <h3 className="explanation_question">{i.question}</h3>
                  <pre>{i.codesnip}</pre>
                  <h3 className="explanation_answer">
                    Correct Answer: {i.answer}
                  </h3>
                  <h3 className="explanation">Explanation: {i.explanation}</h3>
                  <br />
                  <hr className="hr_sep" />
                  <br />
                </div>
              ))}
            </div>

            <div>
              <div className="done_quiz_container">
                <button id="retry_quiz" onClick={retryQuiz}>
                  Retry
                </button>
                <a
                  href="https://www.helpforcoders.com/p/basic-programs-in-c_28.html"
                  id="done_quiz"
                >
                  Done
                </a>
                <a href="/" id="next_quiz">
                  Next Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
        <RightSidebarforLanguagePages />
      </div>

      <ScrolltoTop />
      <Footer />
    </>
  );
};

export default QuizonArraysinC;
