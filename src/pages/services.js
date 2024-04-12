import React from 'react';
import Header from '../components/header';
import service from '../images/project.png';
import Member from '../components/member';

const Services = () => {
  return (
    <div id='services'>
      <div className='content pb-2'>
        <Header/>
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-md-4'><Member src={service} name="UI/UX DESIGN" /></div>
            <div className='col-md-4'><Member src={service} name="LOGOs DESIGN" /></div>
            <div className='col-md-4'><Member src={service} name="GRAPHICS DESIGN" /></div>
          </div>
          <div className='row'>
            <div className='col-md-4'><Member src={service} name="WED DEVLOPMENT" /></div>
            <div className='col-md-4'><Member src={service} name="MOBILE DEVLOPMENT" /></div>
            {/* <div className='col-md-4'><Member src={service} name="Chacha Mohammed Nadjib" /></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
