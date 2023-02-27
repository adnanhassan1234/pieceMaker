import React from 'react'
import DataTable from 'react-data-table-component'
import classes from '../User/index.module.scss'
import unsplash from '../../Images/unsplash.png'
import unsplash2 from '../../Images/unsplash2.png'
import unsplash3 from '../../Images/unsplash3.png'
import unsplash4 from '../../Images/unsplash4.png'

const Users = () => {
    const columns = [
        {
            name: <p>NAME / EMAIL</p>,
            selector: row => row.select,
            sortable: true,
        },
        {
            name: <p>STATUS</p>,
            selector: row => row.status,
            cell: row => (
              <span className='text-success'>Active</span> 
            )
        },

        {
            name: <p>LOCATION</p>,
            selector: row => row.location,
        },

        {
            name: <p>PHONE</p>,
            selector: row => row.phone,
            cell: row => (
            '+1 (127) 2123 212'
            )
        },
        {
            name: <p>DATE JOINED</p>,
            selector: row => row.phone,
            cell: row => (
                '02.18.2022'
            )
        },
    ];
    const data = [
        {
          select: 
            <div className={classes.table_image}>
                <div className={classes.img_box}>
                    <img src={unsplash} alt="" />
                </div>
                <div>
                    <strong>Jacob John</strong>
                    <div>jacobjohn@gmail.com</div>
                </div>
            </div>,
         location:'California, DC',
  
        },

        {
            select: 
              <div className={classes.table_image}>
                  <div className={classes.img_box}>
                      <img src={unsplash2} alt="" />
                  </div>
                  <div>
                      <strong>Jacob John</strong>
                      <div>jacobjohn@gmail.com</div>
                  </div>
  
              </div>,
             location:'California, DC',  
          },

          {
            select: 
              <div className={classes.table_image}>
                  <div className={classes.img_box}>
                      <img src={unsplash3} alt="" />
                  </div>
                  <div>
                      <strong>Jacob John</strong>
                      <div>jacobjohn@gmail.com</div>
                  </div>
  
              </div>,
              location:'California, DC', 
          },

          {
            select: 
              <div className={classes.table_image}>
                  <div className={classes.img_box}>
                      <img src={unsplash4} alt="" />
                  </div>
                  <div>
                      <strong>Jacob John</strong>
                      <div>jacobjohn@gmail.com</div>
                  </div>
  
              </div>,
             location:'California, DC',  
          },

          {
            select: 
              <div className={classes.table_image}>
                  <div className={classes.img_box}>
                      <img src={unsplash} alt="" />
                  </div>
                  <div>
                      <strong>Jacob John</strong>
                      <div>jacobjohn@gmail.com</div>
                  </div>
  
              </div>,
             location:'California, DC',  
          },

          {
            select: 
              <div className={classes.table_image}>
                  <div className={classes.img_box}>
                      <img src={unsplash2} alt="" />
                  </div>
                  <div>
                      <strong>Jacob John</strong>
                      <div>jacobjohn@gmail.com</div>
                  </div>
              </div>,
         location:'California, DC', 
          },
    ]
    return (
        <div>
            <DataTable className='data_table'
                columns={columns}
                data={data}
            pagination
            />
        </div>
    )
}

export default Users
