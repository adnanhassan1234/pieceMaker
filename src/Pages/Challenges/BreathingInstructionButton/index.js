import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Card,Form, InputGroup, Row } from 'react-bootstrap'

const BreathingInstructionButton = () => {
    return (
        <>
           <PageTitle title={'Challenges'} />
            <section>
                <Card>
                    <h2>Breathing Instructions</h2>
                    <p>
                        You may create a focus challenge with a level, instruction, duration and goal to have an exciting play
                        on your user’s app.
                    </p>
                    <Card.Body>
                        <Form className='mb-5'>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>Option 1</strong> </Form.Label>
                                <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter Steps Here" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> <strong>Upload Video</strong> </Form.Label>
                                <div className="proflie-upload">
                                    <label for="upload-photo">
                                    <div className='text-center'>
                                    <i class="fal fa-video"></i>
                                    <div className='text'>Upload Video</div>
                                    </div>
                                    </label>
                                    <input type="file" name="photo" id="upload-photo" />
                                </div>
                            </Form.Group>
                        </Form>
                     
                      <button className=' btn btn-bg-none w-25 my-5'>Add Another Option</button>
                    
                        <div className='d-flex justify-content-between'>
                            <button className='btn-bg-none w-25'>Sponsor Opportunity</button>
                            <button className='btn btn-gradient'>Create Challenge</button>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </>
    )
}

export default BreathingInstructionButton
