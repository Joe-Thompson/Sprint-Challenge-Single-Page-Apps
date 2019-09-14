import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
      <div className='location'>
          <Card className='cards'>
              <CardImg top width='180px' src='https://vignette.wikia.nocookie.net/rickandmorty/images/1/17/Ricks_ship.PNG/revision/latest?cb=20160108071357' alt='Missing'/>
              <CardBody className='bodyCard'>
        <CardTitle>{name}</CardTitle>
        <CardText>{type}</CardText>
        <CardText>{dimension}</CardText>
        <CardText>{residents}</CardText>
              </CardBody>
              </Card>
          </div>
  )
}
