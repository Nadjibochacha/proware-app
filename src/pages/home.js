import React from 'react'
import Header from '../components/header';
import Button from 'react-bootstrap/Button';
import './home.css';
import {Typewriter} from 'react-simple-typewriter';
const Home = () => {
  return (
    <div id='home' className=''>
      <div className='content'>
        <Header/>
        <div className='container mt-5'>
            <div className='hero'>
              <h1> pro
              <Typewriter
                words={['Ware', 'fesstional']}
                loop={true} // Whether to loop through the words indefinitely
                cursor
                cursorStyle='_'
                typeSpeed={280} // Typing speed in milliseconds
                deleteSpeed={70} // Deleting speed in milliseconds
                delaySpeed={1000} // Delay between words in milliseconds
              />
              </h1>
              <h4>We craft custom software solutions to drive 
                your business in the digital era. Our expert 
                team delivers tailored technology services 
                for success in today's fast-paced landscape.
              </h4>
              <div className='row ps-sm-3'> 
                <Button variant='' href='/Contact' className='col-md-2 ms-1 btn-orange col-12'>contact us</Button>
                <Button variant='' href='/About' className='col-md-2 btn-violet ms-3 col-12'>read more</Button>
              </div>
              <div className='row stats justify-content-between ms-1'>
                <div className='col-4 col-lg-1'>
                  10 <br/> projects
                  <div></div>
                </div>
                <div className='col-4 col-lg-1'>
                  10 <br/> clients
                  <div></div>
                </div>
                <div className='col-4 col-lg-1'>
                  100 <br/> reviews
                  <div></div>
                </div>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
