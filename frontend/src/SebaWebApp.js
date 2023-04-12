import React from 'react';
import NavBarTop from './components/NavBarTop';
import AboutMePanel from './components/AboutMePanel';
import SkillsContainer from './components/SkillsContainer';
import Contact from './components/Contact';
import NavigationButtons from './components/NavigationButtons';
import Experience from './components/Experience';

import 'animate.css'

const SebaWebApp = () => {

  return (
    <>
      <div id='nav'>
        <NavBarTop />
      </div>
      <section className='container-sm p-3 panel overflow-auto bg-c mt-5 animate__animated animate__fadeIn'>
        <div id="aboutMe" className='container'>
          <AboutMePanel />
        </div>
        <hr />
        <div id="skills" className='container'>
          <SkillsContainer />
        </div>
        <hr />

        <div id='exp' className='container'>
          <Experience />
        </div>
        <hr />
        <div id='contact' className='container'>
          <Contact />
        </div>
        <NavigationButtons />
      </section>

    </>
  );
};

export default SebaWebApp;
