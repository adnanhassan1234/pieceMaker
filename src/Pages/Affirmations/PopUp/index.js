import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import classes from '../../Affirmations/index.module.scss'

const AffirmationPopUp = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                size='medium'
                centered
            >
                <Modal.Body>

                <div className='popup-heading'>
                <h2 className='mb-3'>Add Affirmation</h2>
                <button onClick={props.onHide} className='btn'><i class="far fa-times"></i></button>
                </div>   
                    <Form >
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label> <strong>Affirmation Type</strong> </Form.Label>
                        <Form.Select className='form-box-shadow' aria-label="Default select example">
                            <option>Identity</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label> <strong>Affirmation Content</strong> </Form.Label>
                            <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter scripture or quote here" />
                        </Form.Group>
                    </Form>
                    <div className='btn-bottom'>
                        <Button className='btn btn-gradient'>Create Affirmation</Button>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AffirmationPopUp
