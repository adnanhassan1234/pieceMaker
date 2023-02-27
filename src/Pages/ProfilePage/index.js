import React from 'react'
import { Card, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap'
import classes from "./index.module.scss";
import unsplash from "../../Images/unsplash.png"
import unsplash2 from "../../Images/unsplash2.png"
import unsplash3 from "../../Images/unsplash3.png"
import unsplash4 from "../../Images/unsplash4.png"
import rectangleImg from "../../Images/RectangleImg.png"
import imagTable from "../../Images/ImageTable.png"
import DataTable from 'react-data-table-component';

const ProfilePage = () => {
    const columns = [
        {
            name:
                <>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p className=''>Select all</p>
                    </div>
                    
                </>,
                  selector: row => row.select,
                  sortable: true,
        },
        {
            name: <p>Name</p>,
            selector: row => row.email_address,
            sortable: true,
        },

        {
            name: <p>Phone</p>,
            selector: row => row.phone,
            cell: row => (
                <p>+1 (127) 2123 212</p>
            )
        },
        {
            name: <p>Phone</p>,
            selector: row => row.phone,
            cell: row => (
                <a className={classes.ellipses} href="/"><i class="fal fa-ellipsis-v"></i></a>
            )
        },




    ];
    const data = [
        {
            select: <div className={classes.table_image}>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className={classes.img_box}>
                    <img src={unsplash} alt="" />
                </div>

            </div>,
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            // phone: '+1 (127) 2123 212',

        },
        {
            select: <div className={classes.table_image}>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className={classes.img_box}>
                    <img src={unsplash2} alt="" />
                </div>

            </div>,
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            // phone: '+1 (127) 2123 212',

        },
        {
            select: <div className={classes.table_image}>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className={classes.img_box}>
                    <img src={unsplash3} alt="" />
                </div>

            </div>,
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            // phone: '+1 (127) 2123 212',

        },
        {
            select: <div className={classes.table_image}>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
            <div className={classes.img_box}>
                <img src={unsplash4} alt="" />
            </div>

        </div>,
            email_address: <>
                <strong>Jacob John</strong>
                <p>jacobjohn@gmail.com</p>
            </>,
            // phone: '+1 (127) 2123 212',

        },


    ]
    return (

        <div className={classes.top_header}>
            <Row className='p-3'>
                <Col md={6}>
                    <h1>Profile</h1>
                </Col>
                <Col md={6}>
                    <Row className="mb-3 align-items-center">
                        <Col md={6}>
                            <Form>
                                <InputGroup className="">
                                    <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Search.."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                            </Form>
                        </Col>
                        <Col md={6}>
                            <div className="">
                                <span><i class="far fa-bell"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Row>
                    <Col md={4}>
                        <Card className={classes.left_card}>
                            <Card.Header>
                                <div className={classes.img_box}>
                                    <img src={imagTable} alt="" />
                                    <h3>Thomas Edison</h3>
                                </div>

                            </Card.Header>

                            <Card.Body>

                                <ul>
                                    <li>
                                        <p>Email:</p>
                                        <strong>thomas_edison@gmail.com</strong>
                                    </li>
                                    <li>
                                        <p>Phone Number:</p>
                                        <strong>+1 (127) 2123 212</strong>
                                    </li>
                                    <li>
                                        <p>Location:</p>
                                        <strong>Ontario, Canada</strong>
                                    </li>
                                    <li>
                                        <p>Profession:
                                        </p>
                                        <strong>Psychologist</strong>
                                    </li>
                                    <li>
                                        <p>Bio:</p>
                                        <strong>This is Thomas Edison’s Bio, kindly change this.</strong>
                                    </li>
                                    <li>
                                        <p>Uploaded IDs:</p>
                                    </li>

                                </ul>
                            </Card.Body>
                            <Card.Footer>
                                <Row className={classes.card_footer_left}>
                                    <Col md={6} className={classes.img_box2}>
                                        <img src={rectangleImg} alt="" />
                                    </Col>
                                    <Col md={6} className={classes.img_box2}>
                                        <img src={rectangleImg} alt="" />
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={8}>

                        <Card className={classes.right_card}>
                            <Row  >
                                <Col md={6}>
                                    <h1>Reviews</h1>
                                </Col>
                                <Col md={6}>
                                    <div className="d-flex justify-content-end">
                                        <span><i class="far fa-bell"></i></span>
                                    </div>
                                </Col>

                            </Row>
                            <DataTable
                                columns={columns}
                                data={data}

                            />
                        </Card>
                    </Col>
                </Row>
            </Row>
        </div>

    )
}

export default ProfilePage