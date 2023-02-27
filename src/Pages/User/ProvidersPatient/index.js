import React from 'react';
import {Button, Card, Col, Dropdown, Form, InputGroup, Row} from 'react-bootstrap';
import classes from '../ProvidersPatient/index.module.scss';
import unsplash from "../../../Images/unsplash.png";
import unsplash2 from "../../../Images/unsplash2.png";
import unsplash3 from "../../../Images/unsplash3.png";
import unsplash4 from "../../../Images/unsplash4.png";
import DataTable from 'react-data-table-component';

import {Link, useNavigate} from "react-router-dom";
import ProfileInfo from 'Components/ProfileInfo';
import PageTitle from 'Components/Pagetitle';

const ProviderUserProfile = () => {
    const navigate = useNavigate();
    const CreateProvider = () => {
        navigate('/provider-access');
    };
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
            name: <p></p>,
            selector: row => row.action,
            cell: row => (
                <Link className={classes.ellipses} to="#"><i class="fal fa-ellipsis-v"></i></Link>
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
             phone: '+1 (127) 2123 212',

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
            phone: '+1 (127) 2123 212',

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
            phone: '+1 (127) 2123 212',

        },


    ]
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
                                <Card.Header className='d-flex justify-content-between'>
                                    <Card.Title>Provider’s Patient</Card.Title>
                                    <Button onClick={CreateProvider} variant={'btnAction'}><i className={'fal fa-cog'}></i> </Button>
                                </Card.Header>
                                <DataTable
                                    columns={columns}
                                    data={data}

                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </>

    )
}

export default ProviderUserProfile;