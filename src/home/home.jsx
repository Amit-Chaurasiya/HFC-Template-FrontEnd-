import React, { useState } from "react";
import LearnCpp from "../images/Learn C++ Programming.png";
import LearnC from "../images/Learn C Programming.png";
import LearnJava from "../images/Learn Java Programming.png";
import LearnPython from "../images/Learn Python Programming.png";
import LearnHtml from "../images/Learn Html Programming.png";
import LearnCss from "../images/Learn Css Programming.png";
import LearnJavascript from "../images/Learn Js Programming.png";
import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store"; // HFC store
import LiveHelpIcon from "@mui/icons-material/LiveHelp"; // Ask HFC
import CategoryIcon from "@mui/icons-material/Category"; // Category
import ReviewsIcon from "@mui/icons-material/Reviews"; // Featured Posts
import BookIcon from "@mui/icons-material/Book"; //for Recent Posts
import Footer from "../components/footer";
import FAQHome from "../components/faqhome";
import ScrolltoTop from "../components/scrolltotop";
import MobileNavbar from "../components/navbarmobile";
import Call from "@mui/icons-material/Call";
import NavbarDesktop from "../components/navbardesktop";
import Categories from "../components/labels";
import AskHFC from "../components/askhfc";

const learnCpp = LearnCpp;
const learnC = LearnC;
const learnJava = LearnJava;
const learnPython = LearnPython;
const learnHtml = LearnHtml;
const learnCss = LearnCss;
const learnJs = LearnJavascript;

// Home Recent Post Section Component

const PostsData = [
  {
    id: 1,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 2,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 3,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 4,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 5,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 6,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },

  {
    id: 7,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },

  {
    id: 8,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },

  {
    id: 9,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },

  {
    id: 10,
    postImageSrc:
      "https://1.bp.blogspot.com/-WPoE5d4AryM/YSUzXIRJL7I/AAAAAAAADTs/2RBQVS5kJCkhP_xP8QHw1Be5Dw-AlHqwgCLcBGAsYHQ/s16000/Program%2Bfor%2Bswapping%2528call%2Bby%2Bvalue%2529%2Bthe%2Bvalues%2Bof%2B2.png",
    postTags: "Pointers in C",
    postTitle: "C++ program to swap two values by Call by Value ",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting",
  },
];

const PostCard = (props) => {
  return (
    <>
      <div className="post">
        <img src={props.postImageSrc} alt="Post Image"></img>
        <div className="post_info">
          <p className="post_tags">{props.postTags}</p>
          <a href="/">
            <h2 className="post_title">{props.postTitle}</h2>
          </a>
          <p className="post_content">{props.postContent}</p>
          <button className="post_read_more">Read more &gt;&gt;</button>
        </div>
      </div>
    </>
  );
};

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
    mostViewedTitle: "Pointers in C || Pointers || C programming ",
  },
];

const MostViewedCard = (props1) => {
  return (
    <>
      <div className="most_viewed">
        <img src={props1.mostViewedImageSrc} alt="Most Viewed Image"></img>
        <div className="most_viewed_info">
          <a href="/">
            <h3 className="most_viewed_title">{props1.mostViewedTitle}</h3>
          </a>
        </div>
      </div>
    </>
  );
};

function RedirectPy() {
  window.location.href = "https://www.helpforcoders.com/search/label/PYTHON";
}

const RedirectCpp = () => {
  window.location.href =
    "https://www.helpforcoders.com/2021/08/learn-cpp-programming.html";
};

const RedirectC = () => {
  window.location.href = "/What_is_C";
};

const RedirectJava = () => {
  window.location.href =
    "https://www.helpforcoders.com/2021/08/learn-java-programming.html";
};

// Main JSX Code

const Home = () => {
  return (
    <>
      <NavbarDesktop />
      <MobileNavbar />

      <div className="slider_desktop">
        <div className="slide_track_desktop">
          <div className="slide_desktop">
            <img src={learnCpp} onClick={RedirectCpp} />
          </div>
          <div className="slide_desktop">
            <img src={learnC} onClick={RedirectC} />
          </div>
          <div className="slide_desktop">
            <img src={learnJava} onClick={RedirectJava} />
          </div>
          <div className="slide_desktop">
            <img id="learpy" src={learnPython} onClick={RedirectPy} />
          </div>
          <div className="slide_desktop">
            <img src={learnHtml} />
          </div>
          <div className="slide_desktop">
            <img src={learnCss} />
          </div>
          <div className="slide_desktop">
            <img src={learnJs} />
          </div>

          <div className="slide_desktop">
            <img src={learnCpp} onClick={RedirectCpp} />
          </div>
          <div className="slide_desktop">
            <img src={learnC} onClick={RedirectC} />
          </div>
          <div className="slide_desktop">
            <img src={learnJava} onClick={RedirectJava} />
          </div>
          <div className="slide_desktop">
            <img id="learpy" src={learnPython} onClick={RedirectPy} />
          </div>
          <div className="slide_desktop">
            <img src={learnHtml} />
          </div>
          <div className="slide_desktop">
            <img src={learnCss} />
          </div>
          <div className="slide_desktop">
            <img src={learnJs} />
          </div>
        </div>
      </div>

      <div className="home_content">
        <div className="posts_container">
          <h2 className="recent_posts">
            <BookIcon className="bookicon_recentposts" />
            &nbsp;Recent Posts
          </h2>

          {PostsData.map((val) => {
            return (
              <PostCard
                key={val.id}
                postImageSrc={val.postImageSrc}
                postTags={val.postTags}
                postTitle={val.postTitle}
                postContent={val.postContent}
              />
            );
          })}
        </div>

        <ScrolltoTop />

        <div className="side_bars">
          <div className="side_bar">
            <h2 className="side_barh2">
              <ReviewsIcon className="right_sidebar_languages_icons" /> - Most
              Viewed
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
              <CategoryIcon className="right_sidebar_languages_icons" /> -
              Categories
            </h2>
            <Categories />
          </div>

          <div
            className="side_bar"
            style={{ background: "#000", color: "white" }}
          >
            <h2 className="side_barh2">
              <LiveHelpIcon className="right_sidebar_languages_icons" /> - Ask
              HFC
            </h2>
            <AskHFC />
          </div>

          <div className="side_bar hide_hfc_store">
            <h2 className="side_barh2">
              <StoreIcon className="right_sidebar_languages_icons" /> - HFC
              Store{" "}
            </h2>
            <div style={{ textAlign: "center" }}>
              <iframe
                width="300"
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
              <h2>
                <Call className="right_sidebar_languages_icons" /> - Contact Us
              </h2>
            </Link>
          </div>
        </div>

        <FAQHome />
      </div>

      <Footer />
    </>
  );
};
export default Home;
