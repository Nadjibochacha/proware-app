import React from 'react';
import Card from 'react-bootstrap/Card';
import './member.css';
class Member extends React.Component{
    render(){
        return(
            <Card  className='card'>
                <Card.Img variant="top" src={this.props.src} className='img' />
                <Card.Body className='name'>
                    <Card.Title>{this.props.name} </Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default Member;