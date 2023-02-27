import React from 'react'
import Cv from '../../Images/csv1.svg'

const CSV = (props) => {
  return (
    <button className='csv'>
    <div className='csv-img' ><img src={Cv} alt="" /> </div><h4>All Reports</h4>
    </button>
  )
}

export default CSV