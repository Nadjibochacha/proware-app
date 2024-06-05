import React from 'react';
import Card from 'react-bootstrap/Card';
import './glowBackgroundCard.css';
import CountUp from "react-countup";


const GlowBackgroundCard = (props) => {
    const { stats, type } = props;
    return (
        <div className="stat_card">
            <div className="card-body">
                <CountUp start={0} end={20} duration={2} delay={1}/>
                <p>{type}</p>
            </div>
        </div>
    );
};

export default GlowBackgroundCard
