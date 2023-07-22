import "../App.css";
import React from "react";
import AmitImage from "../images/AmitChaurasiya.png";
import AbhishekImage from "../images/Abhishek.png";
import ScrolltoTop from "../components/scrolltotop";
import Footer from "../components/footer";
import RightSidebarforPages from "../components/rightsidebarforPages";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";

const amitImage = AmitImage;
const abhishekImage = AbhishekImage;

// Main JSX Code

const AboutUs = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="pages_container">
        <div className="posts_container_contact posts_container_contact_mobile">
          <h2 className="contact_header">About Us</h2>
          <hr />
          <h2
            style={{ textAlign: "center", fontSize: "3.5rem" }}
            className="about_title"
          >
            Founders of HFC
          </h2>
          <br />
          <div className="allabout_container">
            <div className="about_container">
              <img
                src={amitImage}
                alt="Amit Chaurasiya"
                height="250px"
                width="257px"
              />
              <h2 className="about_name">Amit D. Chaurasiya</h2>
              <h3 className="about_qualification">Under-Graduate</h3>
              <p className="about_degree">B.E. EXTC Dept</p>
              <p className="about_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                praesentium quam alias ipsa non repellendus dolorem inventore
                omnis eos provident hic possimus molestias numquam sapiente quis
                voluptatibus, veniam tempora consequuntur.
              </p>
            </div>

            <div className="about_container">
              <img
                src={abhishekImage}
                alt="Abhishek Tiwari"
                height="250px"
                width="257px"
              />
              <h2 className="about_name">Abhishek S. Tiwari</h2>
              <h3 className="about_qualification">Under-Graduate</h3>
              <p className="about_degree">B.E. CE Dept</p>
              <p className="about_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                praesentium quam alias ipsa non repellendus dolorem inventore
                omnis eos provident hic possimus molestias numquam sapiente quis
                voluptatibus, veniam tempora consequuntur.
              </p>
            </div>
          </div>
        </div>
        {/* <FAQPages /> */}

        <RightSidebarforPages />
      </div>

      <ScrolltoTop />
      <Footer />
    </>
  );
};

export default AboutUs;
