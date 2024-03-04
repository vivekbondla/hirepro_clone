import React from 'react';

const DateComp=()=> {
  const currentDate = new Date();
  const day=currentDate.toLocaleString('default',{day:'long'});
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year=currentDate.toLocaleString('default',{year:'long'});
  return (
    <div>
        <div>
            <label>Experience </label>
            <p>
            {day}
            {month}
            {year}
            </p>

        </div>
    <div></div>
    </div>
  );
}

export default DateComp;