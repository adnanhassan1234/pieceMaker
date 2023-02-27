import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import classes from "../index.module.scss";

const LevelOneCount = (props) => {
    const navigate = useNavigate();
    const YellowButton = () => {
        navigate('/yellow-button');
    };

    return (
       
           <div className={classes.col_level}>
             <Card className={classes.card_level}>
                <div onClick={YellowButton}  className="m-2 justify-content-start">
                    {props.level}
                   {props.comp}
                   {props.comp_2}
                </div>
            </Card>

            {/* <Row>
                <Col md={4}>
                    <Card onClick={YellowButton}>
                        <Card.Body>
                            <h3>Find 7 Yellow Buttons</h3>
                            <p>Duration: <strong>1 Day</strong></p>
                            <p>Points: <strong>1 Day Point</strong></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
           </div>
    )
}

export default LevelOneCount