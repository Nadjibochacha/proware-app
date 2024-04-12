import React from 'react'
import Header from '../components/header';
import Button from 'react-bootstrap/Button';
import './home.css';
const Home = () => {
  return (
    <div id='home' className=''>
      <Header/>
      {/* <div className='hero container'>
          <h1>proware</h1>
          <h4>We craft custom software solutions to drive 
            your business in the digital era. Our expert 
            team delivers tailored technology services 
            for success in today's fast-paced landscape.
          </h4>
          <div className='row'>
            <Button variant='' href='/Contact' className='col-sm-2 ms-1 btn-orange'>contact us</Button>
            <Button variant='' href='/About' className='col-sm-2 btn-violet ms-sm-3'>read more</Button>
          </div>
          <div className='row stats justify-content-between container'>
            <div className='col-1'>
              10 projects
            </div>
            <div className='col-1'>
              10 clients
            </div>
            <div className='col-1'>
              100 reviews
            </div>
          </div>
      </div> */}
    </div>
  )
}

export default Home;
