import React from 'react'
import DailyStat from '../components/DailyStat'
import FarmSideNav from '../components/FarmSideNav'

const FarmDashboard = () => {
  return (
    <>
    <div className="row">
    <FarmSideNav/>
    <DailyStat/>
    
    </div>
    </>
  )
}

export default FarmDashboard