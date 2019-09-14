import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


export default function EpisodeCard ({ episode }) {
    return(
        <div className='episode'>
            <Card className='cards'>
             <CardImg top width='180px' src='http://lightfarm.com/wp-content/uploads/2017/08/Rick-Morty_1920.jpg' alt='missing' />
             <CardBody className='bodyCard'>
            <CardTitle className='cards'>{episode.name}</CardTitle> <br />
            <CardText>{episode.air_date}</CardText>
             </CardBody>
             </Card>
        </div>
    )
};