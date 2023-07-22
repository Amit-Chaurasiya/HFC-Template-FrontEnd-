// import "./WhatisC.css";
import React, { useState } from "react";
import search from "../files/Search.png";
import hfclogo from "../hfclogo.png";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Searchresult.css"
import { NavLink,Link } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Home from "../home/home"
import Navbar from "../navbar/navbar"
import Footer from "../components/footer";


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





const compilermobHeight = "700";

const SearchResult = () => {
  const brandNameFooter = {
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
  };

  return (
    <>     
    <Navbar/>      
      <main>
        <section>
          <div className="posts_container_learn_c">
            <h1 className="c_post_title">Search Results for ""</h1>
            <br />
            <p className="c_post_content">              
              {/* <search_context.Consumer>

                {(name) =>{
                  return <h1>{name}</h1>
                }}
              </search_context.Consumer> */}
            </p>
          </div>
        </section>

        <aside>
          <div className="left_navigation_compiler_c">
            <ul>
              <NavLink exact activeClassName="left_nav_active" to="/What_is_C">
                <li className="left_nav_links">What is C ?</li>
              </NavLink>

              <NavLink activeClassName="left_nav_active" to="/Concepts_in_C">
                <li className="left_nav_links">Concepts in C Language</li>
              </NavLink>

              <NavLink activeClassName="left_nav_active" to="/Programs_in_C">
                <li className="left_nav_links">Programs in C Language</li>
              </NavLink>

              <NavLink activeClassName="left_nav_active" to="/Notes_of_C">
                <li className="left_nav_links">Notes for C Language</li>
              </NavLink>

              <NavLink activeClassName="left_nav_active" to="/CompilerofC">
                <li className="left_nav_links">Online Compiler for C</li>
              </NavLink>
              <a href="/">
                <li className="left_nav_links">Download IDE for C</li>
              </a>
            </ul>
          </div>
        </aside>

        <aside>
          <div className="side_bars_learn_c">
            <div className="side_bar_learn_c">
              <h2 className="side_barh2" style={{ marginBottom: "1.5rem" }}>
                Most Viewed
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
            <hr />
            <div className="side_bar_learn_c">
              <h2 className="side_barh2">Dummy Side Bar</h2>
            </div>
            <hr />
            <div className="side_bar_learn_c">
              <h2 className="side_barh2">Dummy Side Bar</h2>
            </div>
            <hr />
            <div className="side_bar_learn_c">
              <h2 className="side_barh2">Dummy Side Bar</h2>
            </div>
            <hr/>
            <Link to="/contact" className="side_barh2">
              <h2>Contact Us</h2>
            </Link>
          </div>
        </aside>
      </main>
      
      <Footer/>
    </>
  );
};

export default SearchResult;
