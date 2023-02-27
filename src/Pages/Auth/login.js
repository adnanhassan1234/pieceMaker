import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINT, KEY } from "config/constants";
import AuthService from "services/auth.service";
import accessHeader from "services/headers/access-header";
import Loader from "Components/Loader";
import { LOGIN_SUCCESS } from "actions/types";
import validator from "validator";
import isEmpty from "validator/es/lib/isEmpty";

const Login = () => {
    const [isVisible, setVisible] = useState(false);
    const [serverError, setServerError] = useState([]);
    const toggle = () => {
        setVisible(!isVisible);
    };

    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [user_fcm_token, setfcm_token] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("Must be valid Email");
    const [passError, setPassError] = useState("Email Address and/or Password is incorrect.");
    const validateEmail = (e) => {
        var email = e.target.value;
        if (validator.isEmail(email)) {
            setUserEmail(email)

            setEmailError(null)
        } else {
            if (email != '') {
                setUserEmail(email)

                setEmailError('Must be valid Email')
            } else {
                setEmailError(null)
            }
        }
    };

    const navigate = useNavigate();
    const goToDashboard = () => {
        navigate('/dashboard');
    };
    const [validated, setValidated] = useState(false);
    const signinToEmailHome = async (e) => {
        setIsLoading(true);
        setEmailError(null)
        setPassError(null)

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            setValidated(true);
            e.preventDefault();
            AuthService.postMethod(ENDPOINT.login, false, {
                email: userEmail,
                password: password,
                fcm_token: user_fcm_token,
                role_id:"1"
            })
                .then((res) => {

                    if (res.data.status == 200) {
                        localStorage.setItem("accessToken", JSON.stringify(res.data.data.user.token));
                        localStorage.setItem("refreshToken", JSON.stringify(res.data.data.user.refreshToken));
                        //localStorage.setItem("token", JSON.stringify(res.data.user));
                        dispatch({
                            type: LOGIN_SUCCESS,
                            payload: { user: res.data.user },
                        });

                        setTimeout(function () {
                            setIsLoading(false);
                            goToDashboard("/dashboard");
                        }, 1000);
                    } else {
                        setIsLoading(false);
                        setServerError(res.data.errors)
                        const emailMessage = res?.data?.errors[0]?.email;
                        const passwordMessage = res?.data?.errors[0]?.password;
                        if (emailMessage) {
                            if (validator.isEmail(userEmail)) {
                                setEmailError(emailMessage)
                            } else {
                                setEmailError('Must be valid Email')
                            }
                        }
                        if (passwordMessage) {
                            if (isEmpty(password)) {
                                setPassError(passwordMessage)

                            } else {
                                setPassError('Incorrect Password')

                            }
                        }
                        if (isEmpty(userEmail) && isEmpty(password)) {
                            setPassError(passwordMessage)
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);

                    setIsLoading(false);
                    //console.log(err);
                    // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
                }
                );
        }
    };
    useEffect(function () {
        setEmailError(null)
        setPassError(null)
    }, [setIsLoading])
    if (isLoading == true)
        return <Loader isLoading={isLoading} />;
    return (
            <>
                <h1 className={"mb-5"}>Sign In</h1>
                <Form noValidate validated={validated}>
                    <input type={'hidden'} defaultValue={'1'} />
                    <Form.Group className={"form-group"} controlId="loginEmail">
                        <Form.Control className='form-box-shadow'
                            type={"text"}
                            placeholder="Username"
                            required
                            onChange={(e) => {
                            validateEmail(e);
                            }}
                        />
                        <div className={"inputError"}> {emailError}</div>
                    </Form.Group>
                    <Form.Group className={"form-group"} controlId="loginpassword">
                        <Form.Control className='form-box-shadow'
                            type={"password"}
                            placeholder="Password"
                            required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <div className={"inputError"}> {emailError}</div>
                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Link to={"/forgot-password?"}>Forgot Password?</Link>
                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Button type={"submit"} variant={"gradient d-block w-100"} onClick={signinToEmailHome}>Login</Button>
                    </Form.Group>
                    <Form.Group className={"form-group text-center"}>
                        Don’t have an account? <Link to={"/SignUp"} className={"text-green"}>Create Account</Link>
                    </Form.Group>
                </Form>
            </>
    )
}

export default Login;