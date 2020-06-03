import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import api_github from "../../services/api_github";

import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

import "./styles.css";

import weather_app_img from "./assets/weather_app_img.png";
import pokedex_img from "./assets/pokedex_img.png";
import covid_gif from "./assets/covid_gif.gif";
import currency_gif from "./assets/currency_gif.gif";

export default function Projects() {
  const [data, setData] = useState({});

  /* Slide index */
  const [index, setIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState();

  const selectRepo = () => {
    if (index === 0) {
      return "covid-19-tracker";
    }
    if (index === 1) {
      return "weather-app";
    }
    if (index === 2) {
      return "conversor-react";
    }
    if (index === 3) {
      return "pokedex";
    }
    return "pokedex";
  };

  /* Github API */
  async function handleRepo(selectedIndex) {
    // e.preventDefault();
    setIndex(selectedIndex);

    if (selectedIndex === 4) {
      setNextIndex(1);
    }
    if (selectedIndex < 4) {
      setNextIndex(selectedIndex + 2);
    }
    if (nextIndex + 1 === 5) {
      setNextIndex(1);
    }

    const repo_name = selectRepo();

    try {
      await api_github
        .get(`/${repo_name}`, {
          headers: {
            Authorization: process.env.REACT_APP_GIT_TOKEN,
          },
        })
        .then((response) => {
          setData(response.data);
        });
    } catch (err) {
      // alert('Search Error!')
      console.log("fodase deu erro");
    }
  }

  function selectDeployLink(project_name) {
    if (project_name === "Pokedex") {
      return "https://pokedexproject.netlify.app/";
    }
    if (project_name === "Covid-19-Tracker") {
      return "https://worldcovidtracker.netlify.app/";
    }
    if (project_name === "Weather-App") {
      return "https://matweatherforecast.netlify.app/";
    }
    if (project_name === "Weather-App") {
      return "https://matweatherforecast.netlify.app/";
    }
    if (project_name === "Conversor-React") {
      return "https://converter-fea31.firebaseapp.com/";
    }
    return "404notfoundpage.com";
  }

  function selectDescription(project_name) {
    if (project_name === "Pokedex") {
      return "⚛️ A React App made with the PokeAPI, where you can see some famous pokemons and your abilities/skills and, who knows, 'catch 'em all!' ";
    }
    if (project_name === "Covid-19-Tracker") {
      return "😷This is an web app wich tracks the Covid-19 incidents around the world. You can also check the numbers in a specific location 🌎";
    }
    if (project_name === "Weather-App") {
      return "⛅ A React app that consumes the Open weather API and you can see how is the weather in your city, or in the other side of the world 🗼";
    }
    if (project_name === "Conversor-React") {
      return "💰 A simple React app with a free currency conventer API, where is possible check the world coins values and convert it to your local one 📈";
    }
    return "404notfoundpage.com";
  }

  return (
    <container className="projects-container" id="projects-container">
      {data.name ? (
        <section className="projects-section" id="info-section">
          <a
            href="https://github.com/Madeuss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" size={35} color={"#B0B0B0"} />
          </a>
          <section className="slide-count">
            <h3>0{index + 1}</h3>
            <div className="line-progress" id="line-count" />
            <h3>0{nextIndex}</h3>
          </section>
          <section className="project-data">
            <h1>{data.name}</h1>
            <p>{selectDescription(data.name)}</p>
          </section>

          <div className="project-title">
            <div className="title-line" />
            <h2>projects</h2>
            <div className="title-line" />
          </div>
        </section>
      ) : (
        <section className="projects-section" id="info-section">
          <a
            href="https://github.com/Madeuss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" size={35} color={"#B0B0B0"} />
          </a>
          <section className="slide-count">
            <h3>02</h3>
            <div className="line-progress" id="line-count" />
            <h3>03</h3>
          </section>
          <section
            className="project-data"
            data-aos="fade-right"
            data-aos-offset="-400"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h1>Covid-19-Tracker</h1>
            <p>
              😷This is an web app wich tracks the Covid-19 incidents around the
              world. You can also check the numbers in a specific location 🌎{" "}
            </p>
          </section>

          <div className="project-title">
            <div className="title-line" />
            <h2>projects</h2>
            <div className="title-line" />
          </div>
        </section>
      )}
      <section className="projects-section" id="repo-section">
        <Carousel
          fade={true}
          activeIndex={index}
          onSelect={handleRepo}
          interval={30000}
          indicators={false}
          className="slideshow"
        >
          <Carousel.Item className="slide-item">
            <div className="slide-div" id="pokedex-slide">
              <img
                className="d-block w-100"
                src={pokedex_img}
                alt="pokedex app demo"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide-div" id="covid-tracker-slide">
              <img src={covid_gif} alt="covid tracker app demo" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide-div" id="weather-app-slide">
              <img
                className="d-block w-100"
                src={weather_app_img}
                alt="weather app demo"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide-div" id="currency-conv-slide">
              <img src={currency_gif} alt="currency conver app demo" />
            </div>
          </Carousel.Item>
        </Carousel>

        <div
          className="project-description"
          data-aos="fade-bottom"
          data-aos-offset="-500"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div className="desc-item">
            <h3>Project</h3>
            {data.name ? <p>{data.name}</p> : <p>Covid-19-Tracker</p>}
          </div>

          <div className="desc-item">
            <h3>Main Language</h3>
            {data.language ? <p>{data.language}</p> : <p>JavaScript</p>}
          </div>
          <div className="see-app">
            {data.name ? (
              <a
                href={selectDeployLink(data.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <h5>See the app</h5>
                  <MdWeb className="mdweb-icon" size={20} color={"#ccc"} />
                </span>
              </a>
            ) : (
              <a
                href="https://worldcovidtracker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <h5>See the app</h5>
                  <MdWeb className="mdweb-icon" size={20} color={"#ccc"} />
                </span>
              </a>
            )}
          </div>
        </div>
        <div
          className="see-more"
          data-aos="fade-top"
          data-aos-offset="-500"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <h5>See more?</h5>
          {data.html_url ? (
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              <p id="explore">
                Explore the code <IoIosArrowRoundForward className="arrow" />
              </p>
            </a>
          ) : (
            <a
              href="https://github.com/Madeuss/Covid-19-Tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p id="explore">
                Explore the code <IoIosArrowRoundForward className="arrow" />
              </p>
            </a>
          )}
        </div>
      </section>
    </container>
  );
}
