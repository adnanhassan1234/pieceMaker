import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const ReminderPopUp = (props) => {
    return (
        <div>
            <Modal className='smallest-popup'
                show={props.show}
                size='sm'
               
            >
                <Modal.Body >
                 <p>Edit Reminder <br />Delete </p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ReminderPopUp
