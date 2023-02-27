import React from 'react'
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import classes from '../../Sponsorship/index.module.scss'

const SponsorshipPopUp = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                size='lg'
                centered
            >
                <Modal.Body>

                    <div className='popup-heading'>
                        <h3 className='mb-3'>Add Sponsor Opportunity</h3>
                        <button onClick={props.onHide} className='btn'><i class="far fa-times"></i></button>
                    </div>
                    <Row>
                        <Col md={7}>
                            <Form >
                                <Form.Group className="mb-3">
                                    <Form.Label> <strong>Title</strong> </Form.Label>
                                    <Form.Control  className='form-box-shadow' type="text" placeholder="Advertisement Title" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label> <strong>Affirmation Content</strong> </Form.Label>
                                    <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter scripture or quote here" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label> <strong>URL Link</strong> </Form.Label>
                                    <Form.Control  className='form-box-shadow' type="text" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={5}>
                            <Form.Group>
                                <div className="proflie-upload my-3">
                                    <label for="upload-photo">
                                        <div className='text-center'>
                                            <div className='text'>Upload Phone size image</div>
                                        </div>
                                    </label>
                                    <input type="file" name="photo" id="upload-photo" />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-with-icon">
                                <Form.Label> <strong>Date Range</strong> </Form.Label>
                                <Form.Control  className='form-box-shadow' type="text" />
                            </Form.Group>
                            <Form.Label> <strong>Number of seconds</strong> </Form.Label>
                          
                        </Col>
                    </Row>
                    <div className='btn-bottom'>
                        <Button className='btn btn-gradient w-25'>Create</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SponsorshipPopUp
