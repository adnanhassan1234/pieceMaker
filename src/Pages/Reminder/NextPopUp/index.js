import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const NextPopUp = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                size='lg'
            >
                <Modal.Body >
                    <div className='popup-heading'>
                        <h3 className='mb-3'>Create Reminder</h3>
                        <button onClick={props.onHide} className='btn'><i class="far fa-times"></i></button>
                    </div>
                    <Form >
                        <Form.Group>
                            <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter reminder" />
                        </Form.Group>
                        <Form.Group>
                                <div className="proflie-upload mt-4">
                                    <label for="upload-photo">
                                        <div className='text-center'>
                                            <div className='text'>Upload Phone size image</div>
                                        </div>
                                    </label>
                                    <input type="file" name="photo" id="upload-photo" />
                                </div>
                            </Form.Group>

                        <div className='days-of-week'>
                            <div>
                                <h5>Days:</h5>
                            </div>
                            <Form.Check
                                inline
                                label="Mon"
                                name="GameMode"
                                type='checkbox'
                                id={`Mon`}
                            />


                            <Form.Check
                                inline
                                label="Tue"
                                name="GameMode"
                                type='checkbox'
                                id={`Tue`}
                            />


                            <Form.Check
                                inline
                                label="wed"
                                name="GameMode"
                                type='checkbox'
                                id={`Wed`}
                            />
                            <Form.Check
                                inline
                                label="Thu"
                                name="GameMode"
                                type='checkbox'
                                id={`Thu`}
                            />
                            <Form.Check
                                inline
                                label="Fri"
                                name="GameMode"
                                type='checkbox'
                                id={`fri`}
                            />
                            <Form.Check
                                inline
                                label="sat"
                                name="GameMode"
                                type='checkbox'
                                id={`Sat`}
                            />
                               </div>
                             <div className='time_set'>
                             <h5>Time:</h5>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Select className='form-box-shadow' aria-label="Default select example">
                                    <option>7:00 AM</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            </div>
                    </Form>
                    <div className='btn-bottom'>
                        <Button className='btn btn-gradient'>Create</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default NextPopUp
