import {React} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const SendOTP = () => {
    const navigate = useNavigate();
    const verifyAccount = () => {
        navigate('/signup/verify-account');
    };
    return(
        <>
            <>
                <h1 className={"mb-5"}>Send OTP</h1>
                <p className={"text-muted mb-5"}>Verify your account by using email address or mobile number</p>
                <Form>
                    <Row>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-3"} controlId="signupuemail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className='form-box-shadow' type={"text"}  placeholder="Enter Email" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group col className={"form-group mb-5"} controlId="signupphonenumber">
                                <Form.Label>Mobile Phone</Form.Label>
                                <Form.Control className='form-box-shadow' type={"tel"}  placeholder="+233 1899 3890 12899" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className={"form-group mb-3 text-center"}>
                                <Button className={"w-100"} onClick={verifyAccount}>Continue</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </>
        </>
    )
}

export default SendOTP;