import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./contactus/ContactUs";
import WhatisC from "./learncprogramming/WhatisC";
import ConceptsinC from "./learncprogramming/ConceptsinC";
import Home from "./home/home";
import ProgramsinC from "./learncprogramming/ProgramsinC";
import NotesforC from "./learncprogramming/NotesforC";
import CompilerofC from "./learncprogramming/CompilerofC";
import AboutUs from "./aboutus/AboutUs";
import HelloWorldinC from "./postsinC/HelloWorldinC";
import Privacypolicy from "./privacypolicy/Privacypolicy";
import TermsandConditions from "./termsandconditions/TermsandConditions";
import ErrorsinC from "./learncprogramming/ErrorsinC";
import QuizesinC from "./learncprogramming/QuizforC";
import QuizonArraysinC from "./quizesforc/arraysinc";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/What_is_C" element={<WhatisC />} />
        <Route path="/Concepts_in_C" element={<ConceptsinC />} />
        <Route path="/Programs_in_C" element={<ProgramsinC />} />
        <Route path="/Notes_of_C" element={<NotesforC />} />
        <Route path="/errors_in_C" element={<ErrorsinC/>}/>
        <Route path="/Compiler_of_C" element={<CompilerofC />} />
        <Route path="/quizes-for-c.html" element={<QuizesinC/>}/>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="2021/05/hello-world-in-c.html" element={<HelloWorldinC/>}/>
        <Route path="/privacy-policy" element={<Privacypolicy/>}/>
        <Route path="/terms-and-conditions" element={<TermsandConditions/>}/>
        <Route path="/quiz-arrays-in-c-set-a.html" element={<QuizonArraysinC/>}/>
      </Routes>
    </>
  );
};

export default App;
