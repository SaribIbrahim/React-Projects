import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './SupportCard'
import LearnCard from './LearnCard'

function Support() {
  return (
    <DashboardLayout title={"Dashboard"}>
      <SupportCard/>
      <LearnCard/>
    </DashboardLayout>
  )
}

export default Support