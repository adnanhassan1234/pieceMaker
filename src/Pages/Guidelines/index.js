import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

const Guidelines = () => {
    return (
        <>
        <PageTitle title={'Guidelines'} />
        <section>
            <Card className='py-4'>
                <Row>
                    <Col md={8}>
                        <div className='privacy-policy-dropdown'>
                            <Form.Select className='form-box-shadow' aria-label="Default select example">
                                <option> <h4>Privacy Policy</h4> </option>
                                <option value="1">Terms & Condition</option>
                                <option value="2">FAQ</option>
                              
                            </Form.Select>
                        </div>
                        <div className='paragraph'>

                            Attention All <br />
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            <br />

                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor
                            <br />
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
                            <br />
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt.


                        </div>
                        <div className=' my-4'>
                            <button className='btn btn-gradient w-25'>Save</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='description'>
                            <div className='description-border-bottom'>
                                <h3>November 29,  2021</h3>
                                <span>Update Logs</span> <br />
                                <date>11/12/2021</date>
                                <p>Term & Conditions - Updated!</p>
                            </div>
                            <div className='description-border-bottom'>
                                <date>09/19/2021</date>
                                <p>FAQ</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </section>
        </>
    )
}

export default Guidelines