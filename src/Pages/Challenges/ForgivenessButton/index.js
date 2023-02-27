import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

const ForgivenessButton = () => {
    return (
        <>
         <PageTitle title={'Challenges'} />
            <section>
                <Card>
                    <h2>Forgiveness</h2>
                    <p>
                        You may create a focus challenge with a level, instruction, duration and goal to have an exciting play
                        on your user’s app.
                    </p>
                    <Card.Body>
                        <Form >
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>Tell the Tale</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter tale here" />
                            </Form.Group>
  
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Who sinned against you?</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="Name" />
                                    </Form.Group>      
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Does that person love you?</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="Yes" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label> <strong>Is any information true?</strong> </Form.Label>
                                        <Form.Control className='form-box-shadow' type="text" placeholder="true" />
                                    </Form.Group>
                                </Col>
                               
                            </Row>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>What did that person do that requires foregiveness?</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter details here" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>What boundary did they cross?</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter details here" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>Is there something in your past that triggered an emotional response?</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter details here" />
                            </Form.Group>
                            <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label> <strong>Is your relationship with this person healthy?</strong> </Form.Label>
                                            <Form.Select className='form-box-shadow'>

                                                <option value="1">No</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label> <strong>Is there anything you said or did that requires their forgiveness? </strong> </Form.Label>
                                            <Form.Select className='form-box-shadow'>

                                                <option value="1">Forgive yourself.</option>
                                                <option value="2">2 Day</option>
                                                <option value="3">3 Day</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                   
                                </Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>Repeat Aloud</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="I forgive [parameter] for [parameter] .  I don't need an appology to forgive.  I need [parameter]  to continue or rebuild this relationship.  I forgive [parameter] ." />
                            </Form.Group>
                        </Form>
                        <div className='d-flex justify-content-between'>
                            <button className='btn-bg-none'>Sponsor Opportunity</button>
                            <button className='btn btn-gradient'>Create Challenge</button>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default ForgivenessButton
