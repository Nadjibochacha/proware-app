import React from "react";
import Card from "react-bootstrap/Card";
import { CardSubtitle } from "react-bootstrap";
import "./member.css";

const Member = ({ src, name, service }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={src} className="img" />
      <Card.Body className="name align-items-center">
        <Card.Title>{name}</Card.Title>
        <CardSubtitle>{service}</CardSubtitle>
      </Card.Body>
    </Card>
  );
};

export default Member;
