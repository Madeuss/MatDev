import React from "react";

import $ from "jquery";
import Swiper from "swiper";

import { FaQuoteRight } from "react-icons/fa";
import "./styles.css";

export default function Contact() {
  $(document).ready(function () {
    var mySwiper = new Swiper(".swiper-container", {
      speed: 600,
      parallax: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  return (
    <container className="section-container feedback-container">
      <header id="feedback-header">
        <section id="title">
          <h1>FEEDBACK</h1>
          <p>Clients Testimonies</p>
        </section>

        <section
          id="dialogue"
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <p>But Mat, do you have clients?</p>
          <p>
            -No, I don’t. However... my friends & relatives were up for give me
            a feedback (totally impartial)
          </p>
        </section>
      </header>

      {/* <!-- Swiper --> */}
      <div
        className="swiper-container"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="swiper-wrapper">
          {/* Mom feedback */}
          <div className="swiper-slide">
            <div
              className="feedback-photo"
              id="mom-photo"
              data-swiper-parallax="-300"
            />
            <span id="quotation-icon">
              <FaQuoteRight size={30} color={"#fff"} />
            </span>
            <div className="feedback-text" data-swiper-parallax="-500">
              <p>
                Mateus is handsome, the perfect son. I love him...lorem ipsum
                dolor sit ametlorem ipsum dolor sit ametlorem ipsum
              </p>
            </div>
            <div className="feedback-name" data-swiper-parallax="-500">
              <p>Mida Souza</p>
              <p>_My mom</p>
            </div>
          </div>

          {/* Bródi feedback */}
          <div className="swiper-slide">
            <div
              className="feedback-photo"
              id="brodi-photo"
              data-swiper-parallax="-300"
            />
            <span id="quotation-icon">
              <FaQuoteRight size={30} color={"#fff"} />
            </span>
            <div className="feedback-text" data-swiper-parallax="-500">
              <p>
                Mateus is handsome, the perfect son. I love him...lorem ipsum
                dolor sit ametlorem ipsum dolor sit ametlorem ipsum
              </p>
            </div>
            <div className="feedback-name" data-swiper-parallax="-500">
              <p>Kaique D.</p>
              <p>_Brother</p>
            </div>
          </div>

          {/* Diguinho feedback */}
          <div className="swiper-slide">
            <div
              className="feedback-photo"
              id="digo-photo"
              data-swiper-parallax="-300"
            />
            <span id="quotation-icon">
              <FaQuoteRight size={30} color={"#fff"} />
            </span>
            <div className="feedback-text" data-swiper-parallax="-500">
              <p>
                Mateus is handsome, the perfect son. I love him...lorem ipsum
                dolor sit ametlorem ipsum dolor sit ametlorem ipsum
              </p>
            </div>
            <div className="feedback-name" data-swiper-parallax="-500">
              <p>Diguinho</p>
              <p>_Brother</p>
            </div>
          </div>
        </div>

        {/* <!-- Add Navigation --> */}
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </div>
    </container>
  );
}
