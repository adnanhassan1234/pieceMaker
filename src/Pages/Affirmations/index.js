import React from "react";
import { Form, InputGroup, Card, Tabs, Tab } from "react-bootstrap";
import Identity from "./Identity";
import { useNavigate } from "react-router-dom";
import PageTitle from "Components/Pagetitle";
import AffirmationPopUp from "./PopUp";


const Affirmations = () => {
    const navigate = useNavigate();
    const CreateAffirmation = () => {
        navigate('/create-affirmation');
    };
    return (
        <>
            <PageTitle title={'Affirmations'} />
            <section>
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
                    </Card.Header>
                    <button onClick={CreateAffirmation} className='btn btn-gradient btn-set-end'>
                        <i class="fas fa-plus"></i>
                    </button>

                    <Tabs
                        defaultActiveKey="Identity"
                    >
                        <Tab eventKey="Identity" title="Identity">
                            <Identity />
                        </Tab>
                        <Tab eventKey="Attributes" title="Attributes">
                        </Tab>
                        <Tab eventKey="Purpose" title="Purpose">
                        </Tab>
                        <Tab eventKey="Promises" title="Promises">
                        </Tab>
                        <Tab eventKey="Relationships" title="Relationships">
                        </Tab>
                        <Tab eventKey="Blessings" title="Blessings">
                        </Tab>

                    </Tabs>
                </Card>
            </section>
            
        </>
    );
};

export default Affirmations;
