import React from "react";
import { Form, InputGroup, Card, Tabs, Tab, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import ReminderPopUp from "./PopUp";
import NextPopUp from "./NextPopUp";
import PageTitle from "Components/Pagetitle";


const Reminder = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const columns = [
        {
            name:
                <div className="d-flex">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p>Reminder</p>
                    </div>
                   
                </div>,
            selector: row => row.select,
            sortable: true,
        },
       
        {
            name: '',
            selector: row => row.phone,

        },

        {
            name: '',
            selector: row => row.phone,
            cell: row => (
                <div>7:00 AM</div>
            )
        },
        {
            name: '',
            selector: row => row.phone,
            cell: row => (
                <Dropdown align={"end"}>
                    <Dropdown.Toggle variant={'dropdownToggle'}>
                        <i className={'fal fa-ellipsis-v'}></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Edit Reminder</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        },

    ];
    const data = [
        {
            select: <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                   <div>5 Trust in the LORD with all your heart;  and lean not to your own understanding. <br /> 6 In all your ways acknowledge him, <br /> and he shall direct your paths.</div>
                   </div>,
           
            phone:'',
               
            
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div>These things I have spoken to you, <br /> that in me you might have peace. In the world you shall <br /> have tribulation: but be of good cheer; I have overcome the world.</div>
            </div>,
          
            phone: <>
                <div>Thursday, Friday</div>
            </>
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div>Fear you not; for I am with you: be not dismayed; <br /> for I am your God: I will strengthen you; <br /> yes, I will help you; yes, I will uphold you with <br /> the right hand of my righteousness.</div>
            </div>,
           
            phone: <>
                <div>Friday, Saturday,
                    Sunday</div>
            </>
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div>Be strong and of a good courage, <br /> fear not, nor be afraid of them: for the LORD your God, <br /> he it is that does go with you; <br /> he will not fail you, nor forsake you.</div>
            </div>,
            phone: <>
                <div>Monday, Tuesday</div>
            </>
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div>9 The LORD also will be a refuge for the oppressed, <br /> a refuge in times of trouble.   10 And they <br /> that know your name will put their trust in you: <br /> for you, LORD, have not forsaken them that seek you. </div>
            </div>,
          
            phone: <>
                <div>Monday, Tuesday
                    Wednesday</div>
            </>
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div>2 My brothers, count it all joy when you fall into divers temptations; <br /> 3 Knowing this, that the trying of your faith works patience. <br /> 4 But let patience have her perfect work, <br /> that you may be perfect and entire, wanting nothing.</div>
            </div>,
            phone: <>
                <div>Thursday, Friday</div>
            </>
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div>Blessed is the man that endures temptation: <br /> for when he is tried, he shall receive the crown <br /> of life, which the Lord has promised to them that love him.</div>
            </div>,
           
            phone: <>
                <div>Monday, Tuesday
                    Wednesday</div>
            </>
        },
    ]
    return (
        <>
           <PageTitle title={'Reminder'} />
        <section>
                <Card className="p-0">
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
                        <div className='d-flex justify-content-end'>
                        <button onClick={() => setModalShow(true)} className='btn btn-gradient'>Create Reminder</button>
                    </div>
                    </Card.Header>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                    />
                </Card>
                </section>
             <NextPopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Reminder;

