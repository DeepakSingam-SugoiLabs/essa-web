/**
 *
 * VolunteerhrsArea
 *
 */

import React, { useState } from "react";
import CardLayout from "../CardLayout";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import { volunteerHoursService } from "../_services/volunteerHoursService";

const Head = styled.div`
font-size:21px;
line-height:25px;
font-family:"sfdisplay-regular";
color:var(--FARAH-verify-grey);
`
const MainV = styled.div`
margin-left:50px;
margin-top:55px;
.inputsize{
  height:10%;
  font-family: "sfdisplay-bold";
  font-size: 32px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color:var(--FARAH-verify-grey);
}
.logdatabtn{
  position:absolute;
  bottom:5%;
}
`
const Card = styled.div`
height:70vh;
`

function VolunteerhrsArea({history}) {
  const [vhrs,setVhrs] = useState('')
  const [fhrs,setFhrs] = useState('')
  const [loading,setLoading] = useState(false)

  const handleLogData = async() => {
    setLoading(true);
    let data = []
    data.push({hours_type:'volunteer',hours:vhrs})
    data.push({hours_type:'fitness',hours:fhrs})
    await volunteerHoursService.addVolunteerHoursRequest(data).then((response)=>{
      history.push('/dashboard')
    }).catch((err)=>{console.log("Volunterhrs",err)})
  }
  const checkValid = () => {
    if (vhrs && fhrs) {
      return false
    }
    return true
  }


  return <CardLayout>
          <Card className="row">
              <MainV className="col-md-7">
                  <Head>Volunteer Hours</Head>
                  <InputField value={vhrs} placeholder="0" onChange={(event)=>setVhrs(event.target.value)} className="inputsize"/>
                  <Head className="mt-2">Fitness Hours</Head>
                  <InputField value={fhrs} placeholder="0" onChange={(event)=>setFhrs(event.target.value)} className="inputsize"/>
                  <SubmitButton title="Log data" styles="logdatabtn" callback={handleLogData} disabled={checkValid()} showLoader={loading}/>
              </MainV>
          </Card>
  </CardLayout>;
}

VolunteerhrsArea.propTypes = {};

export default VolunteerhrsArea;
