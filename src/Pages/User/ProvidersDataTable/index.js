import React from 'react'
import DataTable from 'react-data-table-component'
import classes from '../../User/index.module.scss'
import unsplash from '../../../Images/unsplash.png'
import unsplash1 from '../../../Images/ImageTable.png'
import unsplash2 from '../../../Images/unsplash2.png'
import unsplash3 from '../../../Images/unsplash3.png'
import unsplash4 from '../../../Images/unsplash4.png'
import { Card, Dropdown, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ProvidersDataTable = () => {
    const navigate = useNavigate();
    const CreateProvider = () => {
        navigate('/provider-patient');
    };
    const columns = [
        {
            name:
                <>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <p>Select all</p>
                    </div>
                    ,

                </>,
            selector: row => row.select,
            sortable: true,
        },
        {
            name: <p>Name</p>,
            selector: row => row.Name,
            sortable: true,
        },
        {
            name: <p>Phone</p>,
            selector: row => row.phone,

        },

        {
            name: <p>Location</p>,
            selector: row => row.Location,
           
        },
        {
            name: <p>Status</p>,
            selector: row => row.Status,
           
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
                        <Dropdown.Item href="/provider-patient">View Profile</Dropdown.Item>
                        <Dropdown.Item href="#">Disable Account</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        },

    ];
    const data = [
        {
            select: <> <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                <div className={classes.img_box}>
                    <img src={unsplash1} alt="" />
                </div>
            </div>
            </>,
            Name:

                <div>
                    <strong>Jacob John</strong>
                    <div>jacobjohn@gmail.com</div>
                </div>
            ,
            phone: 
                <div>+1 (127) 2123 212</div> ,
         Location: <div>California City, USA</div> ,
         Status: <div className="text-success">Active</div> 
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className={classes.img_box}>
                    <img src={unsplash3} alt="" />
                </div>
            </div>,
            Name:
                <div>
                    <strong>Jacob John</strong>
                    <div>jacobjohn@gmail.com</div>
                </div>
            ,
            phone: <div>+1 (127) 2123 212</div> ,
            Location: <div>California City, USA</div>  ,
            Status: <div className="text-success">Active</div>  
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className={classes.img_box}>
                    <img src={unsplash2} alt="" />
                </div>
            </div>,
            Name:
                <div>
                    <strong>Jacob John</strong>
                    <div>jacobjohn@gmail.com</div>
                </div>
            ,
            phone: <div>+1 (127) 2123 212</div> ,
            Location: <div>California City, USA</div> ,
            Status: <div className="text-success">Active</div>   
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className={classes.img_box}>
                    <img src={unsplash3} alt="" />
                </div>
            </div>,
            Name:
                <div>
                    <strong>Jacob John</strong>
                    <div>jacobjohn@gmail.com</div>
                </div>
            ,
            phone: <div>+1 (127) 2123 212</div> ,
            Location: <div>California City, USA</div> ,
            Status: <div className="text-success">Active</div>   
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className={classes.img_box}>
                    <img src={unsplash4} alt="" />
                </div>
            </div>,
            Name:
                <div>
                    <strong>Jacob John</strong>
                    <div>jacobjohn@gmail.com</div>
                </div>
            ,
            phone:  <div>+1 (127) 2123 212</div> ,
            Location: <div>California City, USA</div> ,
            Status: <div className="text-success">Active</div>    
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className={classes.img_box}>
                    <img src={unsplash} alt="" />
                </div>
            </div>,
            Name:
                <div>
                    <strong>Jacob John</strong>
                    <div>jacobjohn@gmail.com</div>
                </div>
            ,
            phone: <div>+1 (127) 2123 212</div> ,
            Location: <div>California City, USA</div> ,
            Status: <div className="text-success">Active</div>   
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className={classes.img_box}>
                    <img src={unsplash2} alt="" />
                </div>
            </div>,
            Name:
                <div>
                    <strong>Jacob John</strong>
                    <div>jacobjohn@gmail.com</div>
                </div>
            ,
            phone: <div>+1 (127) 2123 212</div> ,
            Location: <div>California City, USA</div> ,
            Status: <div className="text-success">Active</div>   
        },
    ]
    return (
        <div>
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
                    </Card.Header>
            <DataTable className={classes.data_table}
                columns={columns}
                data={data}
            pagination
            />
        </div>
    )
}

export default ProvidersDataTable
