import "../App.css";
import React from "react";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import LeftSidebarforC from "../components/leftsidebarforC";
import RightSidebarforLanguagePages from "../components/rightsidebarforLanguages";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";

const CompilerofC = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="main_content_page">
        <LeftSidebarforC />
        <div className="posts_container_learn_c concepts_in_c">
          <p className="post_path">
            Learn C Programming &gt; Online Compiler for C
          </p>
          <hr className="post_path_hr" />
          <h1 className="c_post_title">Online C Compiler</h1>
          <br />
          <div className="c_post_content">
            <iframe
              style={{ border: "none" }}
              src="https://paiza.io/projects/e/gumy5FNUmX_rfr6AkeOI9Q?theme=twilight"
              width="100%"
              height="775"
              scrolling="no"
              seamless="seamless"
            ></iframe>
          </div>
          <br />
          <br />
        </div>

        <RightSidebarforLanguagePages />
      </div>

      <ScrolltoTop />
      <Footer />
    </>
  );
};

export default CompilerofC;
