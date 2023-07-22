import "../App.css";
import React from "react";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm("HFC", "template_7crcbst", e.target, "user_AdW10Rao4gFJO3wJsgONw")
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

const AskHFC = () => {
  return (
    <>
      <div className="conact_container">
        <form onSubmit={sendEmail}>
          <div className="askhfcClass">
            <div>
              <div>
                <input
                  type="email"
                  className="askhfc_inputs"
                  placeholder="Enter mail ID"
                  name="email"
                  autocomplete="off"
                />
              </div>
              <textarea
                className="askhfc_textarea"
                id=""
                cols="8"
                rows="3"
                placeholder="Ask here...."
                name="message"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                className="askhfc"
                value="Ask HFC"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AskHFC;
