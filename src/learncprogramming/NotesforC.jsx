import "../App.css";
import React, { useState } from "react";
import NotesSS1 from "../images/HFC Notes SS 1.png";
import NotesSS2 from "../images/HFC Notes SS 2.png";
import NotesSS3 from "../images/HFC Notes SS 3.png";
import NotesSS4 from "../images/HFC Notes SS 4.png";
import DownloadIcon from "@mui/icons-material/Download";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import LeftSidebarforC from "../components/leftsidebarforC";
import RightSidebarforLanguagePages from "../components/rightsidebarforLanguages";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";

const notesSS1 = NotesSS1;
const notesSS2 = NotesSS2;
const notesSS3 = NotesSS3;
const notesSS4 = NotesSS4;

const NotesforC = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c concepts_in_c">
          <p className="post_path">Learn C Programming &gt; Notes for C</p>
          <hr className="post_path_hr" />
          <h1 className="c_post_title">Notes for C Programming Language</h1>
          <br />
          <br />
          <div className="notes_images_container">
            <img className="notes_images" src={notesSS1} />
            <img className="notes_images" src={notesSS2} />
          </div>
          <br />
          <div className="notes_images_container">
            <img className="notes_images" src={notesSS3} />
            <img className="notes_images" src={notesSS4} />
          </div>
          <br />
          <div className="download_container">
            <a
              className="download_notes_c"
              href="https://drive.google.com/uc?export=download&id=1PtVAKfJoUv0MpZjVKwB5Y9roLu-PpRQY"
            >
              <DownloadIcon className="download_icon" /> Download Complete Notes
              for C
            </a>
          </div>
          <br />
        </div>
        <RightSidebarforLanguagePages />
      </div>

      <ScrolltoTop />
      <Footer />
    </>
  );
};

export default NotesforC;
