import React, { useState } from "react";
import DatePicker from "react-datepicker";


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateSet = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
      <div className="date-set">
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart // tells this DatePicker that it is part of a range*
            startDate={startDate}

        />
      </div>
  );
};

export default DateSet