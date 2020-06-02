import React from 'react'

import { FaLinkedin, FaBuilding } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'

import './styles.css';

export default function Resume() {  
  return (
    <container className="resume-container" id="resume-container">
      <header id="resume-header">
        <h1>RESUME</h1>
        <p>My short story</p>
        <span>
          <a href="https://www.linkedin.com/in/mateus-souza-da-silva-22654117a/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} color={'#B0B0B0'} /></a>
        </span>
      </header>
      <aside className="resume-aside" id="resume-left-aside">
        <section className="resume-section" id="resume-section-education">
          <h1 className="title">Education</h1>
          <div className="item">
            <div className="date">2015-2017</div>
            <div className="item-info">                   
              <section className="course">
                <h3>Technical IT Education</h3>
              </section>
              <section className="local-name">
                <span><IoMdSchool size={25}/></span>
                <p>Colégio Internacional Torricelli</p>
              </section>
            </div>
          </div>
          <div className="item" id="ifsp-item">
            <div className="date">2019-2021</div>
            <div className="local-info">            
              <section className="course">
                <h3>System Analysis and Development</h3>
              </section>
              <section className="local-name">
                <span><IoMdSchool size={25}/></span>
                <p>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP)</p>
              </section>
            </div>
          </div>
        </section>
      </aside>

      <aside className="resume-aside" id="resume-right-aside">
        <section className="resume-section" id="resume-section-experience">
          <h1 className="title">Experience</h1>
          <div className="item" id="mundial-item">
            <div className="date">2015-2017</div>
            <div className="local-info">
              <section className="course">
                <h3>Young Apprentice</h3>
              </section>
              <section className="local-name" id="mundial">
                <span><FaBuilding size={25}/></span>
                <p>Mundial Calçados LTDA</p>
              </section>
            </div>
          </div>
        </section>

        <section className="know-section">
          <h1 className="title">Knowledge</h1>
          <div className="knowledge">
            <aside className="know-side back-aside">
              <div className="skill c"><p>C</p><span><div /><div /><div /><div /></span></div>
              <div className="skill java"><p>Java</p><span><div /><div /><div /><div /></span></div>
              <div className="skill node"><p>Node</p><span><div /><div /><div /><div /></span></div>
              <div className="skill python"><p>Python</p><span><div /><div /><div /><div /></span></div>
              <div className="skill php"><p>PHP</p><span><div /><div /><div /><div /></span></div>
            </aside>
            <aside className="know-side front-aside">
              <div className="skill css"><p>CSS</p><span><div /><div /><div /><div /></span></div>
              <div className="skill js"><p>JavaScript</p><span><div /><div /><div /><div /></span></div>
              <div className="skill react"><p>ReactJS</p><span><div /><div /><div /><div /></span></div>
              <div className="skill office"><p>Microsoft Office</p><span><div /><div /><div /><div /></span></div>
              <div className="skill sql"><p>SQL</p><span><div /><div /><div /><div /></span></div>
            </aside>
          </div>
        </section>
      </aside>
    </container>
  );
}
  
