import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Member from '../components/member';
import axios from "axios";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          "https://proware-b8c016b867b0.herokuapp.com/api/teammember/"
        );
        setMembers(response.data);
      } catch (error) {
        setError("Failed to fetch members");
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div id='team'>
      <div className='content pb-2'>
        <Header />
        <div className='container mt-5'>
          <div className='row justify-content-center align-items-center'>
            {loading ? (
              <p className='text-uppercase text-center'>wait...</p>
            ) : error ? (
              <p className='text-uppercase text-center'>{error}</p>
            ) : (
              members.map((member, index) => (
                <div className='col-md-4 mb-3 mt-2' key={index}>
                  <Member
                    src={member.profile_image}
                    name={member.fullname}
                    service={member.service.name}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
