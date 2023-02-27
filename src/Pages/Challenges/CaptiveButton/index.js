import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

const captiveButton = () => {
    return (
        <>
          <PageTitle title={'Challenges'} />
            <section>
                <Card>
                    <h2>Take Every Thought Captive</h2>
                    <p>
                        You may create a challenge with a level, instruction, duration and goal to have an exciting play
                        on your user’s app.
                    </p>
                    <Card.Body>
                        <Form >
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>Situation Setup</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter Situation Setup here" />
                            </Form.Group>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Duration</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="email" placeholder="90 secs" />
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Option</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="email" placeholder="Make a plan to use information" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>What is your thought?</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter details here" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>Who is your thought about?</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter details here" />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Is your thought true?</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="True" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Who wrote your thought?</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="Enter name here" />
                                    </Form.Group>
                                    
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Is this information an idication of behavior or identity?</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="Yes" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Can this information be used for good?</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="Yes" />
                                    </Form.Group>
                                    
                                </Col>
                            </Row>      
                        </Form>
                        <div className='d-flex justify-content-between my-4'>
                        <button  className='btn-bg-none'>Sponsor Opportunity</button>
                        <button  className='btn btn-gradient'>Create Challenge</button>
                    </div>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default captiveButton
