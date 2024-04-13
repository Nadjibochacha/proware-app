import React from 'react';
import Header from '../components/header';
import projects from '../images/pro.png';
import Project from '../components/project';

const Portfolio = () => {
  return (
    <div id='port'>
        <div className='content pb-2'>
            <Header/>
            <div className='container mt-5'>
                <h2>our projects</h2>
                <h5>recent</h5>
                <div className='row mt-5 justify-content-center'>
                    <div className='col-md-3'><Project title="website" src={projects} /></div>
                    <div className='col-md-3'><Project title="website" src={projects} /></div>
                    <div className='col-md-3'><Project title="website" src={projects} /></div>
                </div>
                <h5>last month</h5>                
                <div className='row mt-2 justify-content-center'>
                    <div className='col-md-3'><Project title="website" src={projects} /></div>
                    <div className='col-md-3'><Project title="website" src={projects} /></div>
                    <div className='col-md-3'><Project title="website" src={projects} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;