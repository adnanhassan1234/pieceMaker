import PageTitle from 'Components/Pagetitle'
import React from 'react'
import { Card, Tab, Tabs } from 'react-bootstrap'
import ProvidersDataTable from '../ProvidersDataTable'

const Providers = () => {
    return (
        <>
        <PageTitle title={'Provider'} />
        <section>
            <Card className="p-0">
                <Tabs
                    defaultActiveKey="Providers">
                    <Tab eventKey="Sub-Admins" title="Sub-Admins">
                    </Tab>
                    <Tab eventKey="Providers" title="Providers">
                   <ProvidersDataTable/>
                    </Tab>
                </Tabs>
            </Card>
        </section>
        </>
    )
}

export default Providers