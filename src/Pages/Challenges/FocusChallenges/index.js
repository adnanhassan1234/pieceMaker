import React from "react";
import { Dropdown } from "react-bootstrap";
import DataTable from "react-data-table-component";
import ChallengePopUp from "../ChallengePopUp";

const FocusChallenges = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const columns = [
        {
            name:
                <>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <div>Challenge Title</div>
                    </div>

                </>,
            selector: row => row.select,
            sortable: true,
        },
        {
            name: <p>Level</p>,
            cell: row => (
                '1'
            )
        },
        {
            name: <p>Scripture/Quote</p>,
            cell: row => (
                <p className="text-left">Training the mind and the
                    body leads to awareness
                    of soul</p>
            )
        },
        {
            name: <p>Duration</p>,
            selector: row => row.Duration,

        },

        {
            name: <p>Points</p>,
            selector: row => row.Points,
        },
        {
            name: <p>7 Day Challenge</p>,
            selector: row => row.DayChallenge,
        },
        {
            name: '',
            cell: row => (
                <Dropdown align={"end"}>
                    <Dropdown.Toggle variant={'dropdownToggle'}>
                    <i class='fal fa-ellipsis-v'></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item  onClick={() => setModalShow(true)} href="#">View Challenge</Dropdown.Item>
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
                <div className="mt-1">Find 7 Yellow Buttons</div>
            </div>,
            email_address: <>

                <div>5 Trust in the LORD with all your heart; and lean not to your own understanding.   6 In all your ways acknowledge him, and he shall direct your paths.</div>
            </>,
            phone: <>
                <div>Monday, Tuesday
                    Wednesday</div>
            </>,
            Duration:
                <>
                    <div>1 Day</div>
                </>,
            Points: '1',
            DayChallenge: '1'

        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className="mt-1">Find 3 Seasonally Out
                    Of Place Decorations</div>
            </div>,
            email_address: <>

                <div>These things I have spoken to you, that in me you might have peace. In the world you shall have tribulation: but be of good cheer; I have overcome the world.</div>
            </>,
            phone: <>
                <div>Thursday, Friday</div>
            </>,
            Duration:
                <>
                    <div>3 Day</div>
                </>,
            Points: '2',
            DayChallenge: '4'
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className="mt-1">Find 3 Cracked Cell
                    Phone Screens</div>
            </div>,
            email_address: <>

                <div>Fear you not; for I am with you: be not dismayed; for I am your God: I will strengthen you; yes, I will help you; yes, I will uphold you with the right hand of my righteousness.</div>
            </>,
            phone: <>
                <div>Friday, Saturday,
                    Sunday</div>
            </>,
            Duration:
                <>
                    <div>5 Day</div>
                </>,
            Points: '3',
            DayChallenge: '7'
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className="mt-1">Find a Red Door</div>
            </div>,
            email_address: <>

                <div>Be strong and of a good courage, fear not, nor be afraid of them: for the LORD your God, he it is that does go with you; he will not fail you, nor forsake you.</div>
            </>,
            phone: <>
                <div>Monday, Tuesday</div>
            </>,
            Duration:
                <>
                    <div>1 Day</div>
                </>,
            Points: '4',
            DayChallenge: '3'
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className="mt-1">Find Someone that
                    shaves their arms</div>
            </div>,
            email_address: <>

                <div>9 The LORD also will be a refuge for the oppressed, a refuge in times of trouble.   10 And they that know your name will put their trust in you: for you, LORD, have not forsaken them that seek you. </div>
            </>,
            phone: <>
                <div>Monday, Tuesday
                    Wednesday</div>
            </>,
            Duration:
                <>
                    <div>6 Day</div>
                </>,
            Points: '5',
            DayChallenge: '2'

        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className="mt-1">Find an Irish Tattoo</div>
            </div>,
            email_address: <>
                <div>2 My brothers, count it all joy when you fall into divers temptations; 3 Knowing this, that the trying of your faith works patience. 4 But let patience have her perfect work, that you may be perfect and entire, wanting nothing.</div>
            </>,
            phone: <>
                <div>Thursday, Friday</div>
            </>,
            Duration:
                <>
                    <div>2 Day</div>
                </>,
            Points: '6',
            DayChallenge: '8'
        },

    ]
    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
              <ChallengePopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default FocusChallenges

