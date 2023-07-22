import React from "react";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store"; // HFC store
import LiveHelpIcon from "@mui/icons-material/LiveHelp"; // Ask HFC
import CategoryIcon from "@mui/icons-material/Category"; // Category
import ReviewsIcon from "@mui/icons-material/Reviews"; // Featured Posts
import Call from "@mui/icons-material/Call";
import Categories from "./labels";
import AskHFC from "./askhfc";

// Side Bar Most Viewed Section Component

const MostViewedData = [
  {
    id: 1,
    mostViewedImageSrc:
      "https://1.bp.blogspot.com/-p7rYllHzdlQ/YS4OEXE8O_I/AAAAAAAADe4/jAsX5KZYCbwVnd_oNLXn_7gKmYRbEMD-ACLcBGAsYHQ/s16000/Program%2Bto%2Bcount%2Bthe%2Bnumber%2Bof%2Bcharacters%2Bin%2Ba%2Bfile.png",
    mostViewedTitle: "Pointers in C || Pointers || C programming",
  },
  {
    id: 2,
    mostViewedImageSrc:
      "https://1.bp.blogspot.com/-p7rYllHzdlQ/YS4OEXE8O_I/AAAAAAAADe4/jAsX5KZYCbwVnd_oNLXn_7gKmYRbEMD-ACLcBGAsYHQ/s16000/Program%2Bto%2Bcount%2Bthe%2Bnumber%2Bof%2Bcharacters%2Bin%2Ba%2Bfile.png",
    mostViewedTitle: "Pointers in C || Pointers || C programming",
  },
  {
    id: 3,
    mostViewedImageSrc:
      "https://1.bp.blogspot.com/-p7rYllHzdlQ/YS4OEXE8O_I/AAAAAAAADe4/jAsX5KZYCbwVnd_oNLXn_7gKmYRbEMD-ACLcBGAsYHQ/s16000/Program%2Bto%2Bcount%2Bthe%2Bnumber%2Bof%2Bcharacters%2Bin%2Ba%2Bfile.png",
    mostViewedTitle: "Pointers in C || Pointers || C programming",
  },
  {
    id: 4,
    mostViewedImageSrc:
      "https://1.bp.blogspot.com/-p7rYllHzdlQ/YS4OEXE8O_I/AAAAAAAADe4/jAsX5KZYCbwVnd_oNLXn_7gKmYRbEMD-ACLcBGAsYHQ/s16000/Program%2Bto%2Bcount%2Bthe%2Bnumber%2Bof%2Bcharacters%2Bin%2Ba%2Bfile.png",
    mostViewedTitle: "Pointers in C || Pointers || C programming",
  },
  {
    id: 5,
    mostViewedImageSrc:
      "https://1.bp.blogspot.com/-p7rYllHzdlQ/YS4OEXE8O_I/AAAAAAAADe4/jAsX5KZYCbwVnd_oNLXn_7gKmYRbEMD-ACLcBGAsYHQ/s16000/Program%2Bto%2Bcount%2Bthe%2Bnumber%2Bof%2Bcharacters%2Bin%2Ba%2Bfile.png",
    mostViewedTitle: "Pointers in C || Pointers || C programming",
  },
];

const MostViewedCard = (props1) => {
  return (
    <>
      <div className="most_viewed">
        <img src={props1.mostViewedImageSrc} alt="Most Viewed Image"></img>
        <div className="most_viewed_info">
          <a href="/">
            <h2 className="most_viewed_title">{props1.mostViewedTitle}</h2>
          </a>
        </div>
      </div>
    </>
  );
};

const RightSidebarforLanguagePages = () => {
  return (
    <>
      <div className="right_sidebar_language_pages">
        <div className="side_bars_contact">
          <div className="side_bar">
            <h2
              className="side_barh2"
            >
              <ReviewsIcon className="right_sidebar_languages_icons" /> - Most Viewed
            </h2>
            {MostViewedData.map((val1) => {
              return (
                <MostViewedCard
                  key={val1.id}
                  mostViewedImageSrc={val1.mostViewedImageSrc}
                  mostViewedTitle={val1.mostViewedTitle}
                />
              );
            })}
          </div>
          
          <div className="side_bar">
            <h2 className="side_barh2">
              <CategoryIcon className="right_sidebar_languages_icons" /> - Categories
            </h2>
            <Categories/>
          </div>
          
          <div className="side_bar" style={{background:"#000", color:"white"}}>
            <h2 className="side_barh2">
              <LiveHelpIcon className="right_sidebar_languages_icons" /> - Ask HFC
            </h2>
            <AskHFC/>
          </div>
          
          <div className="side_bar hide_hfc_store">
            <h2 className="side_barh2">
              <StoreIcon className="right_sidebar_languages_icons" /> - HFC Store{" "}
            </h2>
            <div style={{ textAlign: "center" }}>
              <iframe
                width="250"
                height="600"
                scrolling="no"
                src="https://widget.cuelinks.com/widgets/61003?cid=126660"
              />
            </div>
          </div>
          
          <div className="side_bar">
            <Link
              to="/contact-us"
              className="side_barh2"
              style={{ color: "black" }}
            >
              <h2><Call className="right_sidebar_languages_icons"/> - Contact Us</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebarforLanguagePages;
