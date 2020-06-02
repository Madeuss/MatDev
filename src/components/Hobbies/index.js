import React from 'react'

import { IoIosFootball } from 'react-icons/io'
import { FaGamepad, FaLaptopCode } from 'react-icons/fa'
import { GiPokerHand } from 'react-icons/gi'
import netflix from './assets/netflix.svg'

/* GIFS */
import soccer from './assets/gifs/soccer.gif'
import game from './assets/gifs/game.gif'
import netflix_gif from './assets/gifs/netflix.gif'
import cards from './assets/gifs/cards.gif'
import coding from './assets/gifs/coding.gif'

import './styles.css';

export default function About() {  
  return (
    <>
      <container className="section-container hobbies-container">
        <div className="hobbies">
          <span id="hobbies-title"><h1>HOBBIES</h1></span>
          {/* <span className="astronaut"></span> */}
          <span className="hobbie-icon">
            <IoIosFootball className="icon" color={"white"} />
            <img src={soccer} alt="Soccer fail gif"/>
          </span>
          <span className="hobbie-icon">
            <FaGamepad className="icon" color={"white"} />
            <img src={game} alt="Game rage"/>
          </span>
          <span className="hobbie-icon" id="netflix-icon">
            <img src={netflix} alt="Netflix icon" className="icon" />
            <img src={netflix_gif} alt="spongebob watching tv"/>
          </span>
          <span className="hobbie-icon">
            <GiPokerHand className="icon" color={"white"} />
            <img src={cards} alt="cards fail"/>
          </span>
          <span className="hobbie-icon">
            <FaLaptopCode className="icon" color={"white"} />
            <img src={coding} alt="cat on computer"/>
          </span>
        </div>
      </container>
    </>
  );
}
  
