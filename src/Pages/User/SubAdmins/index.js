import React from 'react'
import { Card, Form, InputGroup, Tab, Tabs } from 'react-bootstrap'
import SubAdminPopUp from '../SubAdminPopUp'
import SubAdminDataTable from '../SubAdminsDataTable'

const SubAdmins = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <section>
            <div className='header-top'>
                <h1>Sub Admins</h1>
                <div className="d-flex">
                    <Form>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                            <Form.Control
                                placeholder="Search.."
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form>
                    <div className="bell-icon">
                        <i class="icon-Mute-notification"></i>

                    </div>
                </div>
            </div>
            <Card className="p-0">
          
                <Tabs
                    defaultActiveKey="Sub-Admins">
                    <Tab eventKey="Sub-Admins" title="Sub-Admins">
                    <SubAdminDataTable/>
                    </Tab>
                    <Tab eventKey="Providers" title="Providers">
                   
                    </Tab>
                </Tabs>
            </Card>
          
        </section>
    )
}

export default SubAdmins