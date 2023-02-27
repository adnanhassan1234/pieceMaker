import {React} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const sendOTP = () => {
        navigate('/dashboard');
    };

    return(
        <>
            <>
                <h1 className={"mb-5"}>Create Account</h1>
                <Form>
                    <Form.Group col className={"form-group"} controlId="signupfirstname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='form-box-shadow' type={"text"}  placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group col className={"form-group"} controlId="signupphonenumber">
                        <Form.Label>Enter phone number</Form.Label>
                        <Form.Control className='form-box-shadow' type={"tel"}  placeholder="+233 1899 3890 12899" />
                    </Form.Group>

                    <Form.Group col className={"form-group"} controlId="signupuemail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className='form-box-shadow' type={"email"}  placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group col className={"form-group"} controlId="signuppassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='form-box-shadow'
                            type={"password"}
                            placeholder="************"
                        />
                    </Form.Group>
                    <Form.Group col className={"form-group"} controlId="signupconfirmpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control className='form-box-shadow'
                             type={"password"}
                            placeholder="************"
                        />
                    </Form.Group>
                    <Form.Group className={"form-group text-center mb-5"}>
                        <Button variant={"gradient w-100"} onClick={sendOTP}>Sign Up</Button>
                    </Form.Group>
                    <Form.Group className={"form-group text-center"}>
                        Already have an account? <Link to={"/signin"} className={"text-green"}>Sign In</Link>
                    </Form.Group>
                    <Form.Group className={"form-group text-center"}>
                        <Link to={"/admin"} className={"text-green"}>Login as Admin</Link>
                    </Form.Group>
                </Form>
            </>
        </>
    )
}

export default SignUp;