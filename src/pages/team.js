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
          <div className='row mt-5'>
            <div className='col-md-4'><Member src={member} name="Enamlis Zaid Slimane" /></div>
            <div className='col-md-4'><Member src={member} name="Chourha Abderrahmane" /></div>
            <div className='col-md-4'><Member src={member} name="Chacha Mohammed Nadjib" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
