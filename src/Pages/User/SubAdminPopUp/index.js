import DateSet from 'Components/DatePicker'
import React from 'react'
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import classes from '../../User/index.module.scss'

const SubAdminPopUp = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                size='medium'
                centered

            >
                <Modal.Body>

                    <div className='popup-heading'>
                        <h3 className='mb-3'>Add Sponsor Opportunity</h3>
                        <button onClick={props.onHide} className='btn'><i class="far fa-times"></i></button>
                    </div>
                    <Card >
                        <div className={classes.personal_data} >
                            <h4>Personal Data</h4>
                            <p>First Name</p>
                            <h5>Marvin</h5>
                            <p>Last Name</p>
                            <h5>Semibold</h5>
                            <div className='d-flex'>
                                <div className='date-setting'>
                                    <p>Date of Birth</p>
                                        <DateSet />
                                </div>
                                <div className='form-selector'>
                                    <p>Location</p>
                                    <Form.Select aria-label="Default select example">
                                        <option>California, USA</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card  >
                        <div className={classes.personal_data}>
                            <h4>Account Information</h4>
                            <p>Email</p>
                            <h5>marvinsemibold@gmail.com</h5>
                            <p>Username</p>
                            <h5>adminMarvin321</h5>
                            <p>Temporary Password</p>
                            <h5>eydh3464hdgwy</h5>
                        </div>
                    </Card>
                    <div className='btn-bottom'>
                        <Button className='btn btn-gradient w-25'>Add</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SubAdminPopUp
