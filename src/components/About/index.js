import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { TiDocumentAdd } from "react-icons/ti";

import { Link } from "react-scroll";

import "./styles.css";
import me from "./assets/me.jpg";
import vector from "./assets/vector.png";

export default function About() {
  return (
    <container
      className="section-container about-container"
      id="about-container"
    >
      <container className="about">
        <span id="face-icon-about">
          <a
            href="https://www.facebook.com/mateus1two3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={30} color={"black"} />
          </a>
        </span>
        <aside className="photo-aside">
          <div
            className="photo"
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="900"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={vector} alt="vector" />
            <img src={me} alt="Mateus" />
          </div>
        </aside>
        <aside className="about-aside">
          <div
            className="info"
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="1200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            {/* eslint-disable-next-line */}
            <h2>
              Hey! my name is <span>Mateus</span>, you can call me{" "}
              <span>Mat</span>, I'm a programming student and a soccer lover
              (yes, that sums me up) but how you is my friend, right?! I'm gonna
              tell you a little secret: I am a great soccer player too.{" "}
            </h2>
            <p>Feel free to text me :D</p>
          </div>
          <div
            className="about-btns"
            data-aos="fade-left"
            data-aos-offset="-150"
            data-aos-delay="1200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <a
              href="https://www.canva.com/design/DADxssIUHWQ/xqaGQ1xK6AtA_NJKaLncdA/view?utm_content=DADxssIUHWQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="cv-btn" type="text">
                <TiDocumentAdd className="cv-icon" size={25} />
                My CV
              </button>
            </a>
            <Link
              className="nav-link"
              activeClass="active"
              to="contact-container"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <button id="text-me-btn" type="text">
                Text me
              </button>
            </Link>
          </div>
        </aside>
      </container>
      <section
        className="bottom-title"
        data-aos="fade-top"
        data-aos-offset="-500"
        data-aos-delay="1200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <h1>BOUT</h1>
        <h1>ABOUT</h1>
        <h1>ABOUT</h1>
        <h1>A</h1>
      </section>
    </container>
  );
}
