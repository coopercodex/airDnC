import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import {BsPeopleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const Search = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className='search'>
      <DateRangePicker ranges={
       [selectionRange]}
       onChange={handleSelect} />
       <h2>
        Number of Guests
        <BsPeopleFill />
       </h2> 
       <input 
       min={0}
       defaultValue={2}
       type='number'/>
       <Link to="/search">Search AirDnC</Link>
    </div>
  )
}

