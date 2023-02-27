import React from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap';
import classes from '../ProvidersPatient/index.module.scss';
import unsplash from "../../../Images/unsplash.png";
import unsplash2 from "../../../Images/unsplash2.png";
import unsplash3 from "../../../Images/unsplash3.png";
import unsplash4 from "../../../Images/unsplash4.png";
import DataTable from 'react-data-table-component';
import ProfileInfo from 'Components/ProfileInfo';
import PageTitle from 'Components/Pagetitle';

const ProviderAccess = () => {


    return (

        <>
         <PageTitle title={'Provider'} />
            <section>
                <div className={classes.top_header}>
                    <Row>
                        <Col md={3}>
                            <Card>
                                <ProfileInfo />
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Card className={classes.right_card}>
                                <Card.Header>
                                    <Card.Title>Provider’s Access</Card.Title>
                                </Card.Header>
                                <Card.Body >
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Over-all Report</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Food Intake</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Alcohol Intake</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Daily State</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Screen Time</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Habit Tracker</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Profanity Tracking</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Apps View</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                    <div className='d-flex justify-content-between py-2'>
                                        <h5>Accountability Network</h5>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="" />
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </>

    )
}

export default ProviderAccess