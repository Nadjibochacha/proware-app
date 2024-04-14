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
          <div className='row mt-5 '>
            <div className='col-md-4'><center><Member src={service} name="UI/UX DESIGN" /></center></div>
            <div className='col-md-4'><center><Member src={service} name="LOGOs DESIGN" /></center></div>
            <div className='col-md-4'><center><Member src={service} name="GRAPHICS DESIGN" /></center></div>
          </div>
          <div className='row '>
            <div className='col-md-4'><center><Member src={service} name="WED DEVLOPMENT" /></center></div>
            <div className='col-md-4'><center><Member src={service} name="MOBILE DEVLOPMENT" /></center></div>
            {/* <div className='col-md-4'><Member src={service} name="Chacha Mohammed Nadjib" /></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
