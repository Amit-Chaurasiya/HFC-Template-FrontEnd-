import "../App.css";
import React from "react";
import emailjs from "emailjs-com";
import Footer from "../components/footer";
import ScrolltoTop from "../components/scrolltotop";
import RightSidebarforPages from "../components/rightsidebarforPages";
import MobileNavbar from "../components/navbarmobile";
import NavbarDesktop from "../components/navbardesktop";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "HFC_Services",
      "template_6zpfb69",
      e.target,
      "user_nTGBp3tto7sF97BIJeHjk"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

// Main JSX Code

const ContactUs = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />
      <div className="pages_container">
        <div className="posts_container_contact posts_container_contact_mobile">
          <h2 className="contact_header">Contact Us</h2>
          <div className="contact_container">
            <form onSubmit={sendEmail}>
              <div className="contactClass">
                <div>
                  <input
                    type="text"
                    className="contact_inputs"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="contact_inputs"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="contact_inputs"
                    placeholder="Subject"
                    name="subject"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <textarea
                    className="contact_inputs"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    className="SendMessage"
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <RightSidebarforPages />
      </div>

      <ScrolltoTop />
      <Footer />
    </>
  );
};

export default ContactUs;
