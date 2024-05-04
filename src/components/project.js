import React from 'react';
import Card from 'react-bootstrap/Card';
import './project.css'; 
class Project extends React.Component{
    render(){
        return(
          <Card  className='card'>
                <div className='background'></div>
                <Card.Img variant="top" src={this.props.src} className='img' />
                <span className='name'>
                    <Card.Title><a href='' className='text-white'>{this.props.title}</a></Card.Title>
                </span>
          </Card>
        )
    }
}

export default Project;