import box from '../../Images/boxsvg.svg'
import React from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import classes from '../Sponsorship/index.module.scss'
import SponsorshipPopUp from './SponsorshipPopUp'

const Sponsorship = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <section>
            <div className='header-top'>
                <h1>Sponsor Opportunity</h1>
                <div className="d-flex">
                    <div className="bell-icon">
                        <i class="icon-Mute-notification"></i>
                    </div>
                </div>
            </div>
            <Card>
                <Card.Header>
                    <Form className="search-filter-form-field">
                        <InputGroup className="filter-input-field">
                            <InputGroup.Text id="basic-addon1"><i class="icon-Filter"></i></InputGroup.Text>
                            <Form.Control
                                placeholder="Filters"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="search-input-field">
                            <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                            <Form.Control
                                placeholder="Search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                    <button onClick={() => setModalShow(true)} className='btn btn-gradient'>Add Advertisement</button>

                </Card.Header>

                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <div className={classes.advertisement_title}>
                                <div className='mb-4'>
                                    <h5>Advertisement Title</h5>
                                    <date>08. 22. 2021</date>
                                    <div className={classes.img_box}>
                                        <img src={box} alt="" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, atque sapiente blanditiis architecto praesentium ....</p>
                                    <div className='d-flex justify-content-start'>
                                        <div className={classes.calender_icon}> <i class="fal fa-calendar"></i> <date>12. 10. 2021</date></div>
                                        <div className={classes.clock_icon}><i class="fal fa-clock"></i><time>20 Seconds</time></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                 
                                  <div className={classes.edit_icon}>
                                    <i class="far fa-edit"></i>
                                  </div>  
                                  <div className={classes.delete_icon}> 
                                    <i class='icon-delete'></i>
                                  </div> 
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                             <div className={classes.advertisement_title}>
                                <div className='mb-4'>
                                    <h5>Advertisement Title</h5>
                                    <date>08. 22. 2021</date>
                                    <div className={classes.img_box}>
                                        <img src={box} alt="" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, atque sapiente blanditiis architecto praesentium ....</p>
                                    <div className='d-flex justify-content-start'>
                                        <div className={classes.calender_icon}> <i class="fal fa-calendar"></i> <date>12. 10. 2021</date></div>
                                        <div className={classes.clock_icon}><i class="fal fa-clock"></i><time>20 Seconds</time></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className={classes.edit_icon}>
                                    <i class="far fa-edit"></i>
                                  </div>  
                                  <div className={classes.delete_icon}> 
                                    <i class='icon-delete'></i>
                                  </div>  
                                </div>
                             </div>
                        </Col>
                        <Col md={6}>
                            <div className={classes.advertisement_title}>
                                <div className='mb-4'>
                                    <h5>Advertisement Title</h5>
                                    <date>08. 22. 2021</date>
                                    <div className={classes.img_box}>
                                        <img src={box} alt="" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, atque sapiente blanditiis architecto praesentium ....</p>
                                    <div className='d-flex justify-content-start'>
                                        <div className={classes.calender_icon}> <i class="fal fa-calendar"></i> <date>12. 10. 2021</date></div>
                                        <div className={classes.clock_icon}><i class="fal fa-clock"></i><time>20 Seconds</time></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className={classes.edit_icon}>
                                    <i class="far fa-edit"></i>
                                  </div>  
                                  <div className={classes.delete_icon}> 
                                    <i class='icon-delete'></i>
                                  </div>  
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                             <div className={classes.advertisement_title}>
                                <div className='mb-4'>
                                    <h5>Advertisement Title</h5>
                                    <date>08. 22. 2021</date>
                                    <div className={classes.img_box}>
                                        <img src={box} alt="" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, atque sapiente blanditiis architecto praesentium ....</p>
                                    <div className='d-flex justify-content-start'>
                                        <div className={classes.calender_icon}> <i class="fal fa-calendar"></i> <date>12. 10. 2021</date></div>
                                        <div className={classes.clock_icon}><i class="fal fa-clock"></i><time>20 Seconds</time></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className={classes.edit_icon}>
                                    <i class="far fa-edit"></i>
                                  </div>  
                                  <div className={classes.delete_icon}> 
                                    <i class='icon-delete'></i>
                                  </div>  
                                </div>
                             </div>
                        </Col>
                        <Col md={6}>
                            <div className={classes.advertisement_title}>
                                <div className='mb-4'>
                                    <h5>Advertisement Title</h5>
                                    <date>08. 22. 2021</date>
                                    <div className={classes.img_box}>
                                        <img src={box} alt="" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, atque sapiente blanditiis architecto praesentium ....</p>
                                    <div className='d-flex justify-content-start'>
                                        <div className={classes.calender_icon}> <i class="fal fa-calendar"></i> <date>12. 10. 2021</date></div>
                                        <div className={classes.clock_icon}><i class="fal fa-clock"></i><time>20 Seconds</time></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className={classes.edit_icon}>
                                    <i class="far fa-edit"></i>
                                  </div>  
                                  <div className={classes.delete_icon}> 
                                    <i class='icon-delete'></i>
                                  </div>  
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                             <div className={classes.advertisement_title}>
                                <div className='mb-4'>
                                    <h5>Advertisement Title</h5>
                                    <date>08. 22. 2021</date>
                                    <div className={classes.img_box}>
                                        <img src={box} alt="" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, atque sapiente blanditiis architecto praesentium ....</p>
                                    <div className='d-flex justify-content-start'>
                                        <div className={classes.calender_icon}> <i class="fal fa-calendar"></i> <date>12. 10. 2021</date></div>
                                        <div className={classes.clock_icon}><i class="fal fa-clock"></i><time>20 Seconds</time></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className={classes.edit_icon}>
                                    <i class="far fa-edit"></i>
                                  </div>  
                                  <div className={classes.delete_icon}> 
                                    <i class='icon-delete'></i>
                                  </div>  
                                </div>
                             </div>
                        </Col>
                        <Col md={6}>
                            <div className={classes.advertisement_title}>
                                <div className='mb-4'>
                                    <h5>Advertisement Title</h5>
                                    <date>08. 22. 2021</date>
                                    <div className={classes.img_box}>
                                        <img src={box} alt="" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, atque sapiente blanditiis architecto praesentium ....</p>
                                    <div className='d-flex justify-content-start'>
                                        <div className={classes.calender_icon}> <i class="fal fa-calendar"></i> <date>12. 10. 2021</date></div>
                                        <div className={classes.clock_icon}><i class="fal fa-clock"></i><time>20 Seconds</time></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className={classes.edit_icon}>
                                    <i class="far fa-edit"></i>
                                  </div>  
                                  <div className={classes.delete_icon}> 
                                    <i class='icon-delete'></i>
                                  </div>   
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                             <div className={classes.advertisement_title}>
                                <div className='mb-4'>
                                    <h5>Advertisement Title</h5>
                                    <date>08. 22. 2021</date>
                                    <div className={classes.img_box}>
                                        <img src={box} alt="" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, atque sapiente blanditiis architecto praesentium ....</p>
                                    <div className='d-flex justify-content-start'>
                                        <div className={classes.calender_icon}> <i class="fal fa-calendar"></i> <date>12. 10. 2021</date></div>
                                        <div className={classes.clock_icon}><i class="fal fa-clock"></i><time>20 Seconds</time></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                <div className={classes.edit_icon}>
                                    <i class="far fa-edit"></i>
                                  </div>  
                                  <div className={classes.delete_icon}> 
                                    <i class='icon-delete'></i>
                                  </div>  
                                </div>
                             </div>
                        </Col>
                        
                    </Row>



                </Card.Body>

            </Card>
            <SponsorshipPopUp
           show={modalShow}
          onHide={() => setModalShow(false)}
         />
        </section>
    )
}

export default Sponsorship