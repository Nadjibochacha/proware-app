import React, { useState } from 'react';
import Header from '../components/header';
import './contact.css';
import contact from '../images/contact.png';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import img from '../images/image 2.png';
import letter from '../images/letter_send 1.png';
import axios from 'axios';
const Contact = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/contact', {
      name: firstname+lastname ,
      email: email,
      phone: phone,
      message: message,
    })
     .then((res) => {
        console.log(res.data);
      })
     .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div id='contact'>
      <div className='content pb-5'>
        <Header/>
        <h2 className='mt-5'>contact us</h2>
        <div className='container inputs mt-5 row'>
          <div className='col-lg-6 col-12 p-5'>
            <h3>Let’s connect constellations</h3>
            <p>Let's align our constellations!
               Reach out and let the magic of collaboration illuminate our skies.
            </p>
            <Form className='mt-5' onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstname">
                  <Form.Control className='input' type="text" placeholder="First Name" onChange={e=>setFirstname(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} controlId="lastname">
                  <Form.Control className='input' type="text" placeholder="Last Name" onChange={e=>setLastname(e.target.value)}/>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control className='input' type='email' placeholder="Eamil" onChange={e=>setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Control className='input' type='number' placeholder="Phone Number" onChange={e=>setPhone(e.target.value)}/>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="message">
                  <Form.Control className='input' as="textarea" placeholder='Message' rows={3} onChange={e=>setMessage(e.target.value)}/>
                </Form.Group>
              </Row>
              <Button variant="" type="submit" className='btn-submit w-100'>
                Submit <img src={img}/>
              </Button>
            </Form>
          </div>
          <div className='col-lg-3 col-12'>
            <center><img className='Cimg' src={contact} alt='photo'/></center>
          </div>
          <img src={letter} className='lettersend'/>
        </div>
        
      </div>
    </div>
  )
}

export default Contact;