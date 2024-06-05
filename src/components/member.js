import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './member.css';
import axios from "axios";
import {CardSubtitle} from "react-bootstrap";



    const Member = () => {
        const [members, setMembers] = useState([]);

        useEffect(() => {
            const fetchMembers = async () => {
                try {
                    const response = await fetch('http://127.0.0.1:8000/api/teammember/');
                    if (!response.ok) {
                        throw new Error('Failed to fetch members');
                    }
                    const data = await response.json();
                    console.log('API Response:', data);
                    setMembers(data);
                } catch (error) {
                    console.error('Error fetching members:', error);
                }
            };

            fetchMembers();
        }, []);
    return (
        <div className='member-container'>
            {members.map((member, index) => (
                <Card key={index} className='card'>
                    <Card.Img variant="top" src={member.profile_image} className='img' />
                    <Card.Body className='name'>
                        <Card.Title>{member.fullname}</Card.Title>
                        <CardSubtitle>{member.service.name}</CardSubtitle>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Member;
