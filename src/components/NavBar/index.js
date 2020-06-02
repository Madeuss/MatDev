import React, { useEffect } from "react";

import $ from "jquery";

import { Link } from "react-scroll";

import "./styles.css";

export default function NavBar() {
  useEffect(() => {
    $(".burger").click(function () {
      $(".navbar").toggleClass("change");
    });

    $(".nav-item").click(function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });

    $(document).scroll(function () {
      var $header = $(".header");
      var $logo = $(".header .logo");

      $logo.toggleClass("logo-opacity", $(this).scrollTop() > $header.height());
    });
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <h2>
          Mat<span>Dev</span>
        </h2>
      </div>
      <nav className="navbar">
        <div className="burger">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        <ul className="nav-list">
          <li data-text="Home" className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="home-container"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              Home
            </Link>
          </li>
          <li data-text="About" className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="about-container"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              About
            </Link>
          </li>
          <li data-text="Projects" className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="projects-container"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              Projects
            </Link>
          </li>
          <li data-text="Feedback" className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="feedback-container"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              Feedback
            </Link>
          </li>
          <li data-text="Contact" className="nav-item">
            <Link
              className="nav-link"
              id="contact"
              activeClass="active"
              to="contact-container"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
