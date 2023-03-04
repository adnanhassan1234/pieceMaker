import React, { useState, useEffect } from "react";
import PageTitle from "../../Components/Pagetitle";
import {Col, Row, Card, Tabs, Tab, Button} from "react-bootstrap";
import ProfileInfo from "../../Components/ProfileInfo";
import { useLocation } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import faker from 'faker';
import DateSet from "../../Components/DatePicker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);


export const typeAlkohal = {
    labels: ['Beer', 'Wine', 'Liquor', 'Whisky',],
    datasets: [
        {
            label: '%',
            data: [65, 10, 29, 12],
            backgroundColor: [
                '#87C353',
                '#FFD444',
                '#FF7C6D',
                '#8FC0FF',
            ],
            borderWidth: 0,
        },
    ],
};

const typeAlkohalptions = {
    responsive: true,
    interaction: {
        intersect: false,
    },
    plugins: {
        colors: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            align: 'center',
            fontColor: '#000000',

            padding: {
                top:30,
            },

            labels: {
                boxWidth: 10,
                boxHeight: 10,
                position: 'start',

                font: {
                    size: 14,
                    weight: 'normal',
                }

            }

        },
        title: {
            display: true,
            text: 'Type of Alcohol',
            align: 'start',
            color: '#000',

            padding: {
                top: 20,
                bottom: 50
            },

            font: {
                size: 22,
                weight: 'bold',
            }

        },

    },
};

export const typeHappy = {
    labels: ['Happy', 'Unhappy'],
    datasets: [
        {
            label: '%',
            data: [65, 35],
            backgroundColor: [
                '#87C353',
                '#EF323A',
            ],
            borderWidth: 0,
        },
    ],
};

const typeHappyptions = {
    responsive: true,
    interaction: {
        intersect: false,
    },
    plugins: {
        colors: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            align: 'center',
            fontColor: '#000000',

            padding: {
                top:30,
            },

            labels: {
                boxWidth: 10,
                boxHeight: 10,
                position: 'start',

                font: {
                    size: 14,
                    weight: 'normal',
                }

            }

        },
        title: {
            display: true,
            text: 'Type of Alcohol',
            align: 'start',
            color: '#000',

            padding: {
                top: 20,
                bottom: 50
            },

            font: {
                size: 22,
                weight: 'bold',
            }

        },

    },
};

const options = {
    responsive: true,
    interaction: {
        intersect: false,
    },
    plugins: {
        colors: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            align: 'center',
            fontColor: '#000000',

            padding: {
                top: 20,
            },

            labels: {
                boxWidth: 10,
                boxHeight: 10,
                position: 'start',


                font: {
                    size: 14,
                    weight: 'normal',
                }

            }

        },
        title: {
            display: true,
            text: 'Glucose Intake',
            align: 'start',
            color: '#000',

            padding: {
                top: 30,
                bottom: 50
            },

            font: {
                size: 22,
                weight: 'bold',
            }

        },

    },
    scales: {
        // to remove the labels
        x: {
            ticks: {
                display: true,
            },
            // to remove the x-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },
        // to remove the y-axis labels
        y: {
            ticks: {
                display: true,
                beginAtZero: true,
            },
            // to remove the y-axis grid
            grid: {
                drawBorder: false,
                display: true,
            },
        },
    },
};


const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const data = {
    labels,
    datasets: [
        {
            label: 'Low Intake',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: '#FFB9B2',
            borderWidth: '0',
            borderHeight: '0',
            backgroundColor: '#FFB9B2',
            stack: 'Stack 0',

        },
        {
            label: 'Normal Intake',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: '#58A0FD',
            borderWidth: '0',
            borderHeight: '0',
            backgroundColor: '#58A0FD',
            stack: 'Stack 0',
        },
        {
            label: 'Moderate Intake',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: '#FFB751',
            borderWidth: '0',
            borderHeight: '0',
            backgroundColor: '#FFB751',
            stack: 'Stack 0',

        },
        {
            label: 'High Intake',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: '#EC4242',
            borderWidth: '0',
            borderHeight: '0',
            backgroundColor: '#EC4242',
            stack: 'Stack 0',
        }
    ],
};

const ProviderEndUserProfile = () => {

    let location = useLocation();

 const [user , setUser] = useState(location.state?.row);      


 useEffect(() => {
    console.log("~ EditComponent ~ user:", user);
  }, [user]);    // close get row data code

    return(
        <>
         <PageTitle title={'User'} />
            <section>
            
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <ProfileInfo user={user} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <Card>
                            <Card.Body>
                                <Tabs
                                    defaultActiveKey="Results"
                                    justify
                                >
                                    <Tab eventKey="Results" title="Results">
                                        <div className={"chartBox"}>
                                            <div className={"chartHeader"}>
                                                <DateSet />
                                                <Button variant={"csv"}>Download</Button>
                                            </div>
                                            <Line options={options} data={data} />
                                        </div>
                                        <div className={"chartBox"}>
                                            <div className={"chartHeader"}>
                                                <DateSet />
                                                <Button variant={"csv"}>Download</Button>
                                            </div>
                                            <Line options={options} data={data} />
                                        </div>
                                        <div className={"chartBox"}>
                                            <div className={"chartHeader"}>
                                                <DateSet />
                                                <Button variant={"csv"}>Download</Button>
                                            </div>
                                            <Line options={options} data={data} />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Nutrition" title="Nutrition">
                                        <div className={"chartBox"}>
                                            <Bar options={options} data={data} />
                                        </div>
                                        <div className={"chartBox"}>
                                            <Pie data={typeAlkohal} options={typeAlkohalptions} />
                                        </div>
                                        <div className={"chartBox"}>
                                            <Pie data={typeHappy} options={typeHappyptions} />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="DigitalFootprint" title="Digital Footprint">
                                        <div className={"chartBox"}>
                                            <Bar options={options} data={data} />
                                        </div>
                                        <div className={"chartBox"}>
                                            <Pie data={typeAlkohal} options={typeAlkohalptions} />
                                        </div>
                                        <div className={"chartBox"}>
                                            <Pie data={typeHappy} options={typeHappyptions} />
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default ProviderEndUserProfile;