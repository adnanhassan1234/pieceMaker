import PageTitle from "Components/Pagetitle";
import React from "react";
import { Form, InputGroup, Card, Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ChallengeData from "./ChallengesData";
import FocusChallenges from "./FocusChallenges";


const Reminder = () => {
    const navigate = useNavigate();
    const CreateChallenges = () => {
        navigate('/create-challenges');
    };
    return (
        <>
             <PageTitle title={'Challenges'} />
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
                        <button onClick={CreateChallenges} className='btn btn-gradient'>Create Challenge</button>
                    </div>
                    </Card.Header>
                    <Tabs
                        defaultActiveKey="Challenge"
                    >
                        <Tab eventKey="Challenge" title="Challenge">
                        <ChallengeData />
                        </Tab>
                        <Tab eventKey="Focus Challenges" title="Focus Challenges">
                        <FocusChallenges />
                        </Tab>
                    </Tabs>
                </Card>
            </section>
        </>
    );
};

export default Reminder;

