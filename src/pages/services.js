import React, {useState} from 'react';
import Header from '../components/header';
import service from '../images/project.png';
import Member from '../components/member';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  React.useEffect(() => {
      axios.get('https://proware-b8c016b867b0.herokuapp.com/api/service/')
     .then(res => {
          setServices(res.data);
      })
     .catch(err => {
          console.log(err);
      })
  }, [])
  return (
    <div id='services'>
      <div className='content pb-2'>
        <Header/>
        <div className='container mt-5'>
          <div className='row justify-content-center align-items-center'>
            {services.length >0 ? (
              services.map(service => (
                <div className='col-md-4'><center><Member src={service.service_image} name={service.name} /></center></div>
              ))
            ) : (
              <p className=' text-uppercase text-center'>soon...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
