import React from 'react'
import DataTable from 'react-data-table-component';
import AffirmationPopUp from '../PopUp';

const Identity = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const columns = [
        {
            name:
                <>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <h4>Select all</h4>
                    </div>

                </>,
            selector: row => row.select,
            sortable: true,
        },
        {
            name: <h4>Affirmation</h4>,
            selector: row => row.email_address,
            sortable: true,
        },

        {
            name: <h4>No. of Plays</h4>,
            selector: row => row.phone,
            cell: row => (
                <div>45</div>
            )
        },
        {
            name: '',
            selector: row => row.phone,
            cell: row => (
                <a href>
                    <i class='fal fa-ellipsis-v'></i>
                </a>
            )
        },

    ];
    const data = [
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className='setting-icon'>
                    <i class='fas fa-play'></i>
                </div>
            </div>,
            email_address: <>

                <div>I am God’s treasured possession.</div>
            </>,
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className='setting-icon'>
                    <i class='fas fa-play'></i>
                </div>
            </div>,
            email_address: <>

                <div>I am loved by God the Father.</div>
            </>,
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className='setting-icon'>
                    <i class='fas fa-play'></i>
                </div>
            </div>,
            email_address: <>

                <div>I am filled by holiness by God.</div>
            </>,
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className='setting-icon'>
                    <i class='fas fa-play'></i>
                </div>
            </div>,
            email_address: <>

                <div>I am worthy of God’s Love.</div>
            </>,
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className='setting-icon'>
                    <i class='fas fa-play'></i>
                </div>
            </div>,
            email_address: <>

                <div>I am chosen by God to be holy and blameness. </div>
            </>,
        },
        {
            select: <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <div className='setting-icon'>
                    <i class='fas fa-play'></i>
                </div>
            </div>,
            email_address: <>

                <div>I am God’s workmanship, created in Christ.</div>
            </>,
        },
    ]
    return (

        <div>

            <DataTable
                columns={columns}
                data={data}
            />
            <div className='d-flex justify-content-end'>
                <button onClick={() => setModalShow(true)} className='btn btn-gradient'>Add Affirmation</button>
            </div>
            <AffirmationPopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
        

    )
}

export default Identity