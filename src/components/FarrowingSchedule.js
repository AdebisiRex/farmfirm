import React from 'react'
import Farrowing from './Farrowing'
import Schedules from './Schedules'

const FarrowingSchedule = () => {
  return (
    <div className='p-3'>
        <div className='mb-3'>
        <h4 className="fw-bold">Farrowing History</h4>
        </div>
        <Farrowing/>
        <Farrowing/>
        <Farrowing/>
        <Farrowing/>
        
        
    </div>
  )
}

export default FarrowingSchedule