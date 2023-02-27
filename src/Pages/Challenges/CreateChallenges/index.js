import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

const CreateChallenges = () => {
    return (
        <>
         <PageTitle title={'Challenges'} />
            <section>
              
                <Card>
                    <h2>Create a Challenge</h2>
                    <p>
                        You may create a challenge with a level, instruction, duration and goal to have an exciting play
                        on your user’s app.
                    </p>
                    <Card.Body>
                        <Form >
                            <Form.Group>
                                <Form.Label> <strong>Challenges</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter challenge here" />
                            </Form.Group>
                            <Row>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label> <strong>Level</strong> </Form.Label>
                                        <Form.Select className='form-box-shadow'>

                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label> <strong>Duration</strong> </Form.Label>
                                        <Form.Select className='form-box-shadow'>

                                            <option value="1">1 Day</option>
                                            <option value="2">2 Day</option>
                                            <option value="3">3 Day</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label> <strong>Challenge Point Level</strong> </Form.Label>
                                        <Form.Select className='form-box-shadow'>

                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label> <strong>7 Day Challenge</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="1" />
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    <Form.Group className="mb-3">
                                        <Form.Label> <strong>Sponsor</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="@sponsor" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group>
                                <Form.Label> <strong>Scripture or Quote</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter scripture or quote here" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label> <strong>Instructions</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter instruction here" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label> <strong>Notification Reminder Times</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter Notification Reminder Times here" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label> <strong>Obstable and Distraction</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter Obstable and Distraction here" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label> <strong>Goal</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter goal here" />
                            </Form.Group>
                        </Form>
                        <div className='d-flex justify-content-between'>
                        <button  className='btn-bg-none'>Sponsor Opportunity</button>
                        <button  className='btn btn-gradient'>Create Challenge</button>
                    </div>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default CreateChallenges
