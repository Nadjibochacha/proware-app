import React from 'react';
import Header from '../components/header';
import Member from '../components/member';

const Team = () => {
  return (
      <div id='team'>
        <div className='content pb-2'>
          <Header />
          <div className='container mt-5'>
            <div className='member-container'>
              <Member />
            </div>
          </div>
        </div>

        {/* Inline CSS */}
        <style jsx>{`
          .member-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .member-container > * {
            margin: 10px;
            flex: 1 1 300px; /* Adjust the width of each card */
            max-width: 300px; /* Set maximum width for each card */
          }
        `}</style>
      </div>
  );
}

export default Team;
