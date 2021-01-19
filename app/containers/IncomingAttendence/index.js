/**
 *
 * AllAttendence
 *
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { MainPage } from "../MainPage";
import { attendanceService } from "../../components/_services/attendenceService";
import Loader from "../../components/Loader";
import styled from 'styled-components'
import CardLayout from "../../components/CardLayout";
import sattend from '../../images/pngs/sattend.png'
import { incomingrequestservice } from "../../components/_services/incomingrequestservice";


const Title = styled.div`
  font-family: "sfdisplay-bold";
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: black;
  margin-top:2%;
  margin-bottom:2%;

`

const CardArea=styled.div`
height:164px;
width:550px;
color: var(--FARAH-zed-black);
line-height: 1.21;
letter-spacing: normal;
text-align: left;
font-style: normal;
font-stretch: normal;
.imagearea{
  background:linear-gradient(130deg, #eceb95 5%, #98e35b 96%);
}
.mainArea{
  display:flex;
  justify-content:space-between;
  align-items:center
}
.heading{
  font-family:"sfdisplay-bold";
  font-size: 20px;
  font-weight: bold;
  
 
}
.subheading{
  font-family:"sfdisplay-light";
  font-size: 20px;
  font-weight: 300;
  
}
`
const VerticalLine = styled.div`
height:130px;
width:7px;
box-shadow:${props=>props.finalcolor.boxshadow};
background:${props=>props.finalcolor.background};
margin-left:10px;
`

export function IncomingAttendence({history}) {
  const [approvedRequest,setApprovedRequest] = useState(null)
  const [pendingRequest,setPendingRequest] = useState(null)
  const [updateRequired,setUpdateRequired] = useState(null)
  const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
      _getAllRequests()
  },[])
  

  const _getAllRequests = async() => {
    let approved = []
    let pending = []
    await incomingrequestservice.getAllIncomingRequests().then((res)=>{
        const data = res.data
        console.log(data)
        if(data.completed !== undefined){
          data.completed.map((item)=>{
            approved.push(item)
          })
        }
        if(data.pending !== undefined){
          data.pending.map((item)=>{
            pending.push(item)
          })
        }
        setApprovedRequest(approved)
        setPendingRequest(pending)
    }).catch((err)=>console.log(err))

  }

  const Card = ({carddata,approved=false,pending=false}) => {
    let finalColor ;
    const colorObj = [{
      boxshadow:"0 3px 6px 0 rgba(49, 208, 95, 0.35)",
      background: "linear-gradient(to top, #01ba3a, #93ffac)"
    },{
      boxshadow: "0 3px 6px 0 rgba(255, 184, 80, 0.35)",
      background: "linear-gradient(to top, #ff8f00, #ffecb3)"
    }]

    if(approved){
      finalColor = colorObj[0]
    }
    if(pending){
      finalColor = colorObj[1] 
    }
    
    return (
      <CardArea className="ml-2 col-md-5" onClick={()=>{history.push(`/incomingattendence/attendenceapproval/${carddata.id}`)}}>
        <CardLayout>
            <div className="mainArea">
                  <div className="d-flex">
                    <VerticalLine className="my-2" finalcolor={finalColor}/>
                    <div className="ml-4 d-flex flex-column justify-content-around">
                      <div className="heading">Smart Attendence</div>
                      <div className="subheading">{carddata.body}</div>
                      <div className="heading">{carddata.title}</div>
                    </div>
                  </div>
                  <div className="mr-5">
                    <div className="imagearea">
                        <img src={sattend} alt="sattend" height='40px' width='40px'/>
                    </div> 
                  </div>
            </div>
        </CardLayout>
      </CardArea>
    )
  }

  return <MainPage history={history}>
  {!loading ? 
  <>
    {updateRequired !== null ? <Title>Update Required</Title> : <></>}
    {approvedRequest !== null ?
    <> 
    <Title>Approved</Title>
    <div className="row">
    {approvedRequest.map((item)=>{return(<Card carddata = {item} approved={true}/>)})}  
    </div>
    </>
    :<></>
    }  
    {pendingRequest!==null ? 
      <>
      <Title>Pending</Title>
      <div className="row">
    {pendingRequest.map((item)=>{return(<Card carddata = {item} pending={true}/>)})}  
    </div>
      </>:
      <></>
    }
  
  </>  :<Loader/>}
  </MainPage>;
}

IncomingAttendence.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(withConnect)(IncomingAttendence);
