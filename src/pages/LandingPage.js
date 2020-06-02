import React from 'react';

import Loading from '../components/Loading'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
import Hobbies from '../components/Hobbies'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Feedback from '../components/Feedback'
import Contact from '../components/Contact'

export default function LandingPage() {
  return (
    <>
      <Loading />
      <Home />
      <NavBar />
      <About />
      <Hobbies />
      {/* <Resume /> */}
      <Projects />
      <Feedback />
      <Contact /> 
    </>
  );
}
