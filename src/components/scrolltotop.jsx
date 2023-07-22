import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrolltoTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div>
        <button
          id="scroll_to_top_btn"
          className="btnscroll_to_top"
          style={{ display: visible ? "inline" : "none" }}
          onClick={scrollToTop}
        >
          <ExpandLessIcon style={{ fontSize: "4rem", paddingTop: "0.5rem" }} />
        </button>
      </div>
    </>
  );
};

export default ScrolltoTop;
