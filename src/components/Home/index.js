import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

import { LiquidDistortionText } from "react-text-fun";

import AOS from "aos";

import arrow from "./assets/arrow.svg";
import hand from "../assets/hand.svg";
import "./styles.css";

export default function Home() {
  AOS.init();

  return (
    <container className="home-container" id="home-container">
      <container className="body-home">
        <section className="home-text">
          <div
            className="hey-there"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h1 id="hey">
              <div id="hey-line"></div>
              <div id="main-text">
                <LiquidDistortionText
                  id="heyy"
                  paddingLeft={20}
                  text="Hey"
                  fontSize={90}
                  speed={0.3}
                  volatility={0.03}
                  fontFamily="Argon PERSONAL"
                />
                <LiquidDistortionText
                  id="there"
                  paddingLeft={40}
                  text="there!"
                  fontSize={90}
                  speed={0.3}
                  volatility={0.03}
                  fontFamily="Argon PERSONAL"
                />
              </div>
            </h1>
          </div>
          <div
            className="hows"
            data-aos="fade-up"
            data-aos-offset="-50"
            data-aos-delay="2100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            {/* eslint-disable-next-line */}
            <p>How's it going?</p>
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
              <span id="hi-five">
                <img src={hand} alt="high five" />
              </span>
            </Link>
          </div>
        </section>

        <Link
          activeClass="active"
          to="about-container"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <span className="scroll">
            <img src={arrow} alt="arrow down" className="arrow"></img>
            <p>SCROLL</p>
          </span>
        </Link>

        <div className="social-media">
          <a
            href="https://www.facebook.com/mateus1two3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              className="social-icon"
              size={25}
              color={"#B0B0B0"}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mateus-souza-da-silva-22654117a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" size={25} color={"#B0B0B0"} />
          </a>
          <a
            href="https://github.com/Madeuss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" size={25} color={"#B0B0B0"} />
          </a>
          <a
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5511965823661"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="social-icon" size={25} color={"#B0B0B0"} />
          </a>
        </div>
      </container>
    </container>
  );
}
