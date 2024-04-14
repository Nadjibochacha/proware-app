import React from 'react'
import Header from '../components/header';
import member from '../images/team.png';
import Member from '../components/member';
const Team = () => {
  return (
    <div id='team'>
      <div className='content pb-2'>
        <Header/>
        <div className='container mt-5'>
          <div className='row mt-5 justify-content-center'>
            <div className='col-md-4 col-12'><center><Member src={member} name="Enamlis Zaid Slimane" /></center></div>
            <div className='col-md-4 col-12'><center><Member src={member} name="Chourha Abderrahmane" /></center></div>
            <div className='col-md-4 col-12'><center><Member src={member} name="Chacha Mohammed Nadjib" /></center></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;
