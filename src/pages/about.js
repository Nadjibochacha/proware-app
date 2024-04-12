import React from 'react'
import Header from '../components/header'
import './about.css';
const About = () => {
  return (
    <div id='about'>
      <div className='content pb-2'>
        <Header/>
        <div className='container'>
          <h3>about</h3>
          <h5>Innovation meets excellence as we strive to bring cutting-edge solutions to life.
          Dive into our world of technology where creativity knows no bounds.
          Join us on this journey of discovery, where every click unveils a new realm of possibilities.
          Explore, learn, and experience the future with Proware.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default About
