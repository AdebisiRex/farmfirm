import React from 'react'

import Health from './Health'

const HealthSchedule = () => {
  return (
    <>
    <div className='p-3'>
        <div className='mb-3'>
        <h4 className="fw-bold">Health History</h4>
        </div>
        <Health/>
        <Health/>
        <Health/>
        <Health/>
        
        
    </div>

    </>
  )
}

export default HealthSchedule