import React from "react";
import { Col, Row, Form, InputGroup, Card, Tabs, Tab } from "react-bootstrap";
import Cards from "Components/Cards/Cards";
import DateSet from "Components/DatePicker";
import Users from "Pages/User";
import PageTitle from "Components/Pagetitle";


const Dashboard = () => {
    return (
        <>
         <PageTitle title={'Dashboard'} />
            <section>
                <Row className="mb-3">
                    <Col md={3}>
                        <Cards
                            icon={"icon-User"}
                            title={"732"}
                            text={"All Users"}
                            bg={"purple"}
                        />
                    </Col>
                    <Col md={3}>
                        <Cards
                            icon={"fas fa-users"}
                            title={"127"}
                            text={"End User"}
                            bg={"success"}
                        />
                    </Col>
                    <Col md={3}>
                        <Cards
                            icon={"fas fa-users"}
                            title={"434"}
                            text={"Providers"}
                            bg={"danger"}
                        />
                    </Col>
                    <Col md={3}>
                        <Cards
                            icon={"fas fa-users"}
                            title={"765"}
                            text={"Total Downloads"}
                            bg={"dark"}
                        />
                    </Col>
                </Row>
                <Card className="p-0">
                    <div className="date-setter">
                        <DateSet />
                    </div>
                    <Tabs
                        defaultActiveKey="Users"  >
                        <Tab eventKey="Users" title="Users">
                            <Users />
                        </Tab>
                        <Tab eventKey="Providers" title="Providers">
                        </Tab>
                    </Tabs>
                </Card>
            </section>
        </>
    );
};

export default Dashboard;
