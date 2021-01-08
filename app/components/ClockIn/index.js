/**
 *
 * ClockIn
 *
 */

import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardLayout from "../CardLayout";
import { attendanceService } from "../_services/attendenceService";
import Loader from "../Loader";
import { error } from "shelljs";


const AlignItems = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
height:70vh;
.amounthrs{
  font-size:30px;
  line-height:58px;
  font-family:"sftext-bold";
  padding-left:10px;
}
.hrstext{
  text-align:center;
  font-size:22px;
  line-height:22px;
  font-family:"sftext-regular";
  align-self:center;
  padding-left:20px;
  color:var(--FARAH-verify-grey)
}
.card-dimen{
  height:83px;
  width:280px;
}
.circular-background{
  height:150px;
  width:150px;
  background-color:var(--FARAH-gallery);
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  margin-bottom:20px;
}
.error-text{
  font-family:"sfdisplay-regular";
  font-size:21px;
  color:var(--FARAH-verify-grey);
}

`

const Button = styled.button`
height:130px;
width:130px;
text-align:center;
border-radius:50%;
background:linear-gradient(to bottom,var(--FARAH-white),var(--FARAH-wild-sand));
border:none;
outline:none;
transition: 0.2s all;
box-shadow: 1px 3px 11px 6px rgba(0,0,0,0.15);
font-size:21px;
color:var(--FARAH-light-grey);
font-family:"sfdisplay-regular";
:focus{
  outline:none;
}
:active{
  transform: scale(0.9)
}
`
const ExptBtn = styled.button`
border:none;
outline:none;
background:var(--FARAH-white);
border-radius:20px;
box-shadow: 1px 3px 11px 6px rgba(0,0,0,0.15);
font-size:24px;
font-family:"sftext-bold";
line-height:29px;
color:var(--FARAH-verify-grey);
letter-spacing:-1.2px;
padding:10px 25px;
transition: 0.2s all;
:focus{
  outline:none;
}
:active{
  transform: scale(0.9)
}
`
const LOCTIONERRMSG = "Please Enable the Location Services in your Browser"
const CLOCKINMSG = "You are Clocked In!"
const CLOCKOUTMSG = "You are Clocked Out!"

function ClockIn({history}) {
  const [errors,setErrors] = React.useState({
    show:false,
    message:""
  })
  const [coords,setCoords] = React.useState({
    latitude:null,
    longitude:null,
  })

  const [weekHrs,setWeekHrs] = React.useState("")
  const [lastCheckin, setLastCheckin] = React.useState('out')
  
  const [loading,setLoading] = React.useState(false)

  useEffect(()=>{
          const startingFunctions = async () => {
            setLoading(true)
            await navigator.geolocation.getCurrentPosition(getLocationSuccess,getLocationError)
            await getAttendanceDetail()
            setLoading(false)
          }
          startingFunctions()
          console.log("called")
        },[])

        const getLocationSuccess = (position) => {
          setCoords({...coords,latitude:position.coords.latitude,longitude:position.coords.longitude}) 
          setErrors({...errors,show:false,message:""})
        }
        const getLocationError  = (err) => {
          setErrors({...errors,show:true,message:LOCTIONERRMSG})
        }

  const ClockinAction = async () => {
    if(errors.message===LOCTIONERRMSG){
      return 
    }
    let data = {
      attendance_type: lastCheckin == 'out' ? 'in' : 'out',
      attendance_coordinates: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
      clocked_at: new Date(),
    }
    setLoading(true)
    await attendanceService
      .handleAttendaceAPI(data)
      .then((response) => {
        if (response.data) {
          getAttendanceDetail()
          if (response.data.attendance_type === 'in') {
            setErrors({...errors,show:true,message:CLOCKINMSG})
          } else {
            setErrors({...errors,show:true,message:CLOCKOUTMSG})
          }
          setLastCheckin(response.data.attendance_type)
        }
        setLoading(false)
      })
      .catch((error) => {
        setErrors({...errors,show:true,message:"Server Down"})
        setLoading(false)
        console.log(error)
      })

  }

  const getAttendanceDetail = async () => {
    await attendanceService
      .getRecentAttenanceAPI()
      .then((response) => {
        console.log(response.data)
        if (response.data.weeklyDuration !== '0:00') {
          const { weeklyDuration } = response.data
          setWeekHrs(weeklyDuration)
        }
        if (response.data.result.length > 0) {
          const { attendance_type } = response.data.result[0]
          if (attendance_type === 'in') {
            setErrors({...errors,show:true,message:CLOCKINMSG})
          } else {
            setErrors({...errors,show:true,message:CLOCKOUTMSG})
          }
          setLastCheckin(attendance_type)
        }
      })
      .catch((error) => {
        setErrors({...errors,show:true,message:"Server Down"})
        console.log(error)
      })
  }

  return <CardLayout>
                  <AlignItems>
                    <div className="card-dimen">
                        <CardLayout>
                          <div className="d-flex">
                              <div className="amounthrs">
                                  {weekHrs}
                              </div>
                              <div className="hrstext">
                                    No. of Hours <br/>
                                    this Week    
                              </div>
                          </div>
                        </CardLayout>
                     </div>
                     {errors.show && <div className="error-text">{errors.message}</div>}
                     <div className="circular-background">
                          <Button onClick={ClockinAction} disabled={loading}>
                             {errors.message===CLOCKINMSG ? "Clock Out" : "Clock In"} 
                             {loading && <Loader small={true} color="text-secondary"/>}
                          </Button>
                      </div>
                     <ExptBtn onClick={()=>history.push("/exceptionattendence/0")}>
                            Request Exception
                     </ExptBtn>   
                  </AlignItems>
  </CardLayout>
}

ClockIn.propTypes = {};

export default ClockIn;
