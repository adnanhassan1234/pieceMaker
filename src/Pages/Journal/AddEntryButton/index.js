import classes from "./index.module.scss";
import HeaderTop from 'Components/Header'
import React from 'react'
import { Button, Col,Form,Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const AddEntryButton = () => {
    const navigate = useNavigate();
    const TurnBack = () => {
        navigate('/journal');
    };
    return (
        <>
            <HeaderTop />
                <section>
                    <div className='d-flex justify-content-start mb-3'>
                        <span onClick={TurnBack} className={classes.arrow_style}><i class="far fa-arrow-left"></i></span> <h3>Add Journal</h3>
                    </div>
                    <Row className="d-flex justify-content-center">
                        <Col md={10}>
                            <Form className="mb-3">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label> <strong>Add Journal To:</strong> </Form.Label>
                                    <Form.Control type="password" placeholder="Blood Pressure" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label> <strong>What Happened?</strong> </Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter here" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label> <strong>How did you respond?</strong> </Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter here" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label> <strong>How will you improve next time?</strong> </Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter here" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md={10} className='mb-5'>
                            <div className={classes.record}>
                                <Col md={6}>
                                    <Row>
                                        <Col md={3}>
                                            <div className={classes.smile_icon}>
                                                <span ><i class="far fa-smile"></i></span>
                                            </div>
                                        </Col>
                                        <Col md={9}>
                                            <strong> <h4>Did You Achieve Your Personal Goals?
                                            </h4></strong>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <div className={classes.btn_center}>
                                        <Button className='btn btn-gradient me-2'>Yes, I am!</Button>
                                        <Button className={classes.btn_cancel}> <strong>No</strong> </Button>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                        <div className=' d-flex justify-content-center mb-5 pt-5'>
                            <Button className='btn btn-gradient w-50'>Save</Button>
                        </div>
                    </Row>
                </section>
            </>
        )
    }

export default AddEntryButton