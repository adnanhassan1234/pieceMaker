import classes from "./index.module.scss";
import HeaderTop from 'Components/Header'
import React from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Journal = () => {
    const navigate = useNavigate();
    const ButtonEnter = () => {
        navigate('/add-entry-button');
    };
    return (
        <>
            <HeaderTop />
            <section>
            <Card>
                <Card.Header>
                    <Card.Title>
                        <h2>Journal Entries</h2>
                    </Card.Title>
                    <div>
                        <Form className="d-flex justify-content-end ">
                            <InputGroup className="w-85 me-2" >
                                <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Search.."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <button onClick={ButtonEnter} className='btn btn-gradient d-block w-50 me-2'>Add Entry</button>
                        </Form>
                    </div>
                </Card.Header>
                <div className={classes.boxes_rounded}> 
                        <div >
                            <p>Blood Pressure</p>
                            <h4>Fight with my Ex</h4>
                        </div>
                        <div className=' d-flex justify-content-end '>
                            <p>February 21, 2022</p>
                        </div>
                  
                </div>
                <div className={classes.boxes_rounded}>
                        <div>
                            <p>Blood Pressure</p>
                            <h4>Journal Entry 001</h4>
                        </div>
                        <div className=' d-flex justify-content-end '>
                            <p>February 21, 2022</p>
                        </div>
                </div>
                <div className={classes.boxes_rounded}>
                        <div>
                            <p>Blood Pressure</p>
                            <h4>Journal Entry 002</h4>
                        </div>
                        <div className=' d-flex justify-content-end '>
                            <p>February 21, 2022</p>
                        </div> 
                </div>
                <div className={classes.boxes_rounded}>
                        <div>
                            <p>Blood Pressure</p>
                            <h4>Journal Entry 003</h4>
                        </div>
                        <div className=' d-flex justify-content-end '>
                            <p>February 21, 2022</p>
                        </div>
                </div>
            </Card>
            </section>
        </>
    )
}

export default Journal