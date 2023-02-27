import PageTitle from "Components/Pagetitle";
import React from "react";
import { Card, Form, InputGroup, Row, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import EndUserSupport from "./EndUser/index.js";
import Tickets from "./Ticket.js";

const Support = () => {
  return (
    <>
      <PageTitle title={'Support'} />
      <section>
        <Card>
        <div className="search-profile">
        <h3>Messages</h3>
        <Link to={"#"}><i class="fal fa-search"></i></Link>
        </div>
          <Tabs defaultActiveKey="Users">
            <Tab eventKey="Users" title="Users">
              <Tickets />
            </Tab>
            <Tab eventKey="Providers" title="Providers">
              <EndUserSupport />
            </Tab>
          </Tabs>
        </Card>
      </section>
    </>
  );
};
export default Support;
