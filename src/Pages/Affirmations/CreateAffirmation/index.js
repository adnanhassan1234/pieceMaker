
import classes from '../../Affirmations/index.module.scss'
import React from 'react'
import { Button, Form, InputGroup, Row } from 'react-bootstrap'
import AffirmationPopUp from '../PopUp';
import PageTitle from 'Components/Pagetitle';


const CreateAffirmation = (props) => {
   

    return (
        <>
            <PageTitle title={'Affirmations'} />
            <div className={classes.create_affirmation_bg}>
                <h2 className='mb-3'>Create a Affirmation</h2>
                <Form >
                    <Form.Group >
                        <Form.Label> <strong>Affirmation Type</strong> </Form.Label>
                        <Form.Control className='form-box-shadow' type="password" placeholder="Identity" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label> <strong>Affirmation Content</strong> </Form.Label>
                        <Form.Control className='form-box-shadow' as="textarea" rows={3} placeholder="Enter scripture or quote here" />
                    </Form.Group>
                </Form>
                <div className={classes.btn_bottom}>
                    <Button  className='btn btn-gradient'>Create Affirmation</Button>
                </div>
            </div>
           
        </>
    )
}

export default CreateAffirmation