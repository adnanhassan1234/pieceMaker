import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import classes from "../index.module.scss";

const CounterCard = (props) => {
    const navigate = useNavigate();
    const NextLevel = () => {
        navigate('/level-one');
    };
    return (
       
           <div className={classes.col}>
             <Card onClick={NextLevel} className={classes.card}>
                <Card.Body className="m-2 justify-content-start">
                    <h4>{props.level}</h4>
                    <p>{props.comp}</p>
                </Card.Body>
            </Card>
           </div>
    )
}

export default CounterCard