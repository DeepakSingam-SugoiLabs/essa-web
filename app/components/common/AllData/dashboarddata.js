import React from 'react'
import AttendenceIcon from '../icons/dashboardIcons/AttendenceIcon'
import ItserviceIcon from '../icons/dashboardIcons/ItserviceIcon'
import VolunteerIcon from '../icons/dashboardIcons/VolunteerIcon'

export const data = [
    {
      icon:<AttendenceIcon/>,
      name:"Smart Attendence",
      link:"/dashboard/smartattendence",
    },
    {
      icon:<VolunteerIcon/>,
      name:"Volunteer Hours",
      link:"/dashboard/volunteerhrs",
    },
    {
      icon:<ItserviceIcon/>,
      name:"IT service",
      link:"/dashboard",
    },
  ]