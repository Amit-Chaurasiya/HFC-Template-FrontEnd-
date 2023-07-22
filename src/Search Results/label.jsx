import React from "react";
import "./label.css";

const Labels_in_c = [
  {
    lbl: "C",
    link: "https://www.helpforcoders.com/search/label/*%20and%20%26%20in%20c",
  },
  {
    lbl: "C++",
    link: "www.helpforcoders.com/search/label/C++",
  },
  {
    lbl: "Java",
    link: "www.helpforcoders.com/search/label/java",
  },
  {
    lbl: "Python",
    link: "www.helpforcoders.com/search/label/python",
  },
  {
    lbl: "HTML CSS",
    link: "www.helpforcoders.com/search/label/css",
  },
  {
    lbl: "JavaScript",
    link: "www.helpforcoders.com/search/label/javascript",
  },
];

const Labels_in_c_card = (props) => {
  return (
    <>
      <span>
        <a herf={props.link}>{props.lbl}</a>
      </span>
    </>
  );
};

const AllLabelsinC = () => {
  return (
    <>
      <span className="tags">Labels</span>
      {Labels_in_c.map((val) => {
        return (
          <>
            <span className="labels">
              <a href={<Labels_in_c_card link={val.link} />}>
                <Labels_in_c_card lbl={val.lbl} />
              </a>
            </span>
          </>
        );
      })}
    </>
  );
}

export default AllLabelsinC;
