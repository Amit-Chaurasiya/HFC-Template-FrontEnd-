import React from "react";
import "../App.css";

const Labels_in_c = [
  {
    lbl: "C",
    link: "",
  },
  {
    lbl: "C++",
    link: "",
  },
  {
    lbl: "Java",
    link: "",
  },
  {
    lbl: "Python",
    link: "",
  },
  {
    lbl: "HTML",
    link: "",
  },
  {
    lbl: "CSS",
    link: "",
  },
  {
    lbl: "JavaScript",
    link: "",
  },
];

const Labels = (props) => {
  return (
    <>
      <span>
        <a herf={props.link}>{props.lbl}</a>
      </span>
    </>
  );
};

function GetVal() {
  for (var i = 0; i < Labels_in_c.length; i++) {
    console.log(document.getElementById("tagname").innerText);
  }
}

const Categories = () => {
  return (
    <>
      <span className="tags">Labels:- </span>
      {Labels_in_c.map((val) => {
        return (
          <>
            <div className="label_container">
              <span id="tagname" className="labels" onClick={GetVal}>
                <Labels lbl={val.lbl} />
              </span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Categories;
