import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ApprovalIcon from "@mui/icons-material/Approval"; // TnC
import HomeIcon from "@mui/icons-material/Home"; // Home
import PolicyIcon from "@mui/icons-material/Policy"; // Policy
import CallIcon from "@mui/icons-material/Call"; // Contact Us
import InfoIcon from "@mui/icons-material/Info"; // About Us
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const brandNameFooter = {
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
  };

  return (
    <>
      <div className="footer">
        <div className="social-media-footer">
          <a href="/">
            <LinkedInIcon
              className="social-media-logo"
              style={{ color: "#0077B5" }}
            />
            - LinkedIn
          </a>
          <a href="/">
            <FacebookIcon
              className="social-media-logo"
              style={{ color: "#4867AA" }}
            />
            - Facebook
          </a>
          <a href="/">
            <InstagramIcon
              className="social-media-logo"
              style={{ color: "rgb(232,63,90)" }}
            />
            - Instagram
          </a>
          <a href="/">
            <TwitterIcon
              className="social-media-logo"
              style={{ color: "#2BA5DA" }}
            />
            - Twitter
          </a>
          <a href="/">
            <YouTubeIcon
              className="social-media-logo"
              style={{ color: "#B7081B" }}
            />
            - YouTube
          </a>
        </div>
        <div className="nav-bar-footer">
          <Link to="/">
            <HomeIcon
              className="footer_icons"
              style={{
                fontSize: "calc(inherit+1rem)",
                paddingRight: "0.5rem",
                color: "#ffb800",
              }}
            />
            &nbsp; Home
          </Link>
          <Link to="/about-us">
            <InfoIcon
              className="footer_icons"
              style={{
                paddingRight: "0.5rem",
                color: "#ffb800",
              }}
            />
            &nbsp; About Us
          </Link>
          <Link to="/contact-us">
            <CallIcon
              className="footer_icons"
              style={{
                paddingRight: "0.5rem",
                color: "#ffb800",
              }}
            />
            &nbsp; Contact Us
          </Link>
          <Link to="/privacy-policy">
            <PolicyIcon
              className="footer_icons"
              style={{
                paddingRight: "0.5rem",
                color: "#ffb800",
              }}
            />
            &nbsp; Privacy Policy
          </Link>
          <Link to="/terms-and-conditions">
            <ApprovalIcon
              className="footer_icons"
              style={{
                paddingRight: "0.5rem",
                color: "#ffb800",
              }}
            />
            &nbsp; Terms and Conditions
          </Link>
        </div>
        <div className="copyright-footer">
          <h2 style={brandNameFooter} className="brand-name-footer">
            Help For Coders
          </h2>
          <p
            className="enjoy_coding_footer"
            style={{
              textAlign: "center",
              color: "#ffb800",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            #Enjoy Coding
          </p>
          <p style={{ textAlign: "center" }}>
            Copyright © 2021
            <span style={{ color: "white" }}> Help For coders</span> All Right
            Reseved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
