import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ChallengePopUp = (props) => {
    const navigate = useNavigate();
    const Inventory = () => {
        navigate('/inventory-challenge');
    };
    const navigateSecond = useNavigate();
    const Captive = () => {
        navigateSecond('/captive-button');
    };
    const navigateThird = useNavigate();
    const Forgiveness = () => {
        navigateThird('/forgiveness-button');
    };
    const navigateForth = useNavigate();
    const Instructions = () => {
        navigateForth('/breathing-instruction-button');
    };
    return (
        <Modal
            show={props.show}
            size='medium'
            centered
        >
            <Modal.Body>
                <div className='popup-heading-second'>
                    <button onClick={props.onHide} className='btn'><i class="far fa-times"></i></button>
                    <h2>Choose a focus challenge</h2>
                </div>
                <div>
                    <button onClick={Inventory} className=' btn btn-bg-none w-100 my-2'> Inventory Challenge</button>
                    <button onClick={Captive} className=' btn btn-bg-none w-100 my-2'>Take Every Thought Captive</button>
                    <button onClick={Forgiveness} className=' btn btn-bg-none w-100 my-2'>Forgiveness</button>
                    <button onClick={Instructions} className=' btn btn-bg-none w-100 my-2'>Breathing Instructions</button>
                </div>
                <div className='btn-bottom'>
                    <Button className='btn btn-gradient'>Create</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ChallengePopUp