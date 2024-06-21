import React, { useState } from 'react';
import Header from '../components/header';
import projet from '../images/pro.png';
import Project from '../components/project';
import axios from 'axios';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    React.useEffect(() => {
        axios.get('https://proware-b8c016b867b0.herokuapp.com/api/project/')
       .then(res => {
            setProjects(res.data);
        })
       .catch(err => {
        setError("Failed to fetch projects");
            console.log(err);
        })
        .finally(()=>setLoading(false))
    }, [])
  return (
    <div id='port'>
        <div className='content pb-2'>
            <Header/>
            <div className='container mt-5'>
                <h2>our projects</h2>
                <h5>recent</h5>
                <div className='row mt-5 justify-content-center'>
                    {loading ? (
                            <p className='text-uppercase text-center'>wait...</p>
                            ) : error ? (
                            <p className='text-uppercase text-center'>{error}</p>
                            ) : (
                            projects.map((project,i) => (
                                <div className='col-md-3' key={i}><center><Project title={project.name} link ={project.project_link} src={project.image} /></center></div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;