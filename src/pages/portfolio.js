import React, { useState } from 'react';
import Header from '../components/header';
import projet from '../images/pro.png';
import Project from '../components/project';
import axios from 'axios';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    React.useEffect(() => {
        axios.get('your link')
       .then(res => {
            setProjects(res.data);
        })
       .catch(err => {
            console.log(err);
        })
    }, [])
  return (
    <div id='port'>
        <div className='content pb-2'>
            <Header/>
            <div className='container mt-5'>
                <h2>our projects</h2>
                <h5>recent</h5>
                <div className='row mt-5 justify-content-center'>
                    {
                        projects.length > 0 ? (
                            projects.map(project => (
                                <div className='col-md-3'><center><Project title={project.title} link ={project.link} src={project.img} /></center></div>
                            ))
                        ):(
                            <p className=' text-uppercase text-center'>soon ...</p>
                        ) 
                    }
                </div>
                <h5>last month</h5>                
                <div className='row mt-2 justify-content-center'>
                    <div className='col-md-3'><center><Project title="website" link ="link" src={projet} /></center></div>
                    <div className='col-md-3'><center><Project title="website" link ="link" src={projet} /></center></div>
                    <div className='col-md-3'><center><Project title="website" link ="link" src={projet} /></center></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;