import React from 'react'
import { Bar } from 'react-chartjs-2';
  
  export const options = {
    responsive: true,
  
  };
 

export const data = {
 
};
function ChartBar() {
  
    return <Bar options={options} data={data} />;
  
}

export default ChartBar