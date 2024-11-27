import React from 'react';
import './About.css';
import SimpleSlider from '../Slider/aboutslider';
import Employee from '../../Employee/employee';

function About() {
  return (
    <div className='about-container'>
      <SimpleSlider/>
      <Employee/>
    </div>
  )
}

export default About;
