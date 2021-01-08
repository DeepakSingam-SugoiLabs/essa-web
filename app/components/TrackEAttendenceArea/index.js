/**
 *
 * TrackEAttendenceArea
 *
 */

import React, { useState,useEffect } from "react";
import CardLayout from "../CardLayout";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeadingSecondary from "../HeadingSecondary";
import { attendanceService } from "../_services/attendenceService";
import Loader from "../Loader";
import OutgoingProgressBar from "../OutgoingProgressBar";
import moment from 'moment';
import OutgoingBitCustom from "../OutgoingBitCustom";





const ReasonText = styled.div`
font-family: "sftext-regular";
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.05px;
  text-align: left;
  color: var(--FARAH-zed-black);
`
const Date=styled.div`
font-family: "sftext-Bold";
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -1.05px;
  color: var(--FARAH-zed-black);
`
const City = styled.div`
font-family: "sfdisplay-light";
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  color:var(--FARAH-verify-grey) ;
`
const MainInfoProgress = styled.div`
.sectionHeight{
  min-width:200px;
  max-width:200px;
  margin-top:-25px;
  z-index:2;
}
.txtarea{
font-size:21px;
line-height:25px;
color:var(--FARAH-zed-black);
}
.adjustPadding{
position:absolute;
}
.role{
  font-family:"sfdisplay-bold";
  letter-spacing:-1.05px
}

.date{
font-family:"sfdisplay-light";

}
`

function TrackEAttendenceArea({id}) {
  const [trackSAR,setTrackSAR] = useState({})

  useEffect(()=>{
      getUserData()
  },[])

  const getUserData = async() => {
    const userId = id
    await attendanceService.getExceptionRequestByIdAPI(userId).then((response)=>{
      if (response.data) {
        let data = {}
        data.name = 'Attendance Exception'
        data.subTitle = response.data.attendance[0].location
        data.userName = response.data.attendance[0].username
        data.date = moment(response.data.attendance[0].date).format('LL')
        data.postedOn = moment(
          response.data.attendance[0].createdAt,
        ).format('LLL')
        data.comment = response.data.attendance[0].comments
        data.reason = response.data.attendance[0].reason
        let filesUploaded = []
        response.data.attachment.map((file) => {
          filesUploaded.push({
            uri: file.file_path,
            name: file.file_name,
            id: file.id,
          })  
        })
        data.attachment_link = filesUploaded
        let temp = []
          /***
           * status code
           * 0: in_progress
           * 1: completed
           * 2: not_started
           */
          temp.push(
            {
              role: 'Requested',
              date: moment(response.data.attendance[0].createdAt).format(
                'DD/MMM/YYYY',
              ),
              status: 1,
              statusName: '',
            },
            {
              role: 'Line Manager',
              date: _getDateLM(
                response.data.attendance[0].request_status,
                response,
              ),
              status: _getAssignedRoleLM(
                response.data.attendance[0].request_status,
              ),
              statusName: _getStatusNameLM(
                response.data.attendance[0].request_status,
              ),
            },
          )
          data.tracking = temp
          data.currentProgressStatus = _getCurrentOnGOIngRole(
            response.data.attendance[0].assigned_to_role,
          )
          data.overAllStatus = _getOverAllStatus(
            response.data.attendance[0].request_status,
          )
          console.log(data)
          setTrackSAR(data)
      
      }
      
      
    }).catch((err)=>{
      console.log(err)
    })
  }


  const _getCurrentOnGOIngRole = (name) => {
    if (name === 'Line Manager') {
      return 1 //hirerecy number
    }
    return 0
  }
  
  const _getOverAllStatus = (type) => {
    switch (type) {
      case 'pending':
        return 0
      case 'completed':
        return 1
      case 'rejected':
        return 2
      default:
        return 0
    }
  }
  
  const _getDateLM = (response_status, response) => {
    if (response_status === 'pending') {
      return null
    }
    return moment(response.data.last_status_updated).format('LLL')
  }
  
  const _getAssignedRoleLM = (response_status) => {
    if (response_status === 'completed') {
      return 1
    } else if (response_status === 'rejected') {
      return 2
    }
    return 0
  }
  
  const _getStatusNameLM = (request_status) => {
    if (request_status === 'update_required') {
      return '(Commented)'
    } else if (request_status === 'rejected') {
      return '(Rejected)'
    } else if (request_status === 'completed') {
      return '(Approved)'
    }
    return '(Pending)'
  }
  
  
  const createDate = (date) => {
      let newdate = new window.Date(date)
      let newDateArr = newdate.toDateString().split(" ")
      newDateArr.shift()
      return newDateArr.join(" ")
  }

  

  return <CardLayout>
    <div className="ml-5 row mb-5">
    {trackSAR.userName!==undefined ? <div className="col-md-6">
        <HeadingSecondary title="Smart Attendance" design="mt-5"/>
        <ReasonText className="mb-4">{trackSAR.reason}</ReasonText>
        <CardLayout>
        <div className="d-flex justify-content-between my-3 px-3">
          <Date>{trackSAR.date}</Date>
          <City>{trackSAR.subTitle}</City>
        </div>
        </CardLayout>
          <MainInfoProgress className="mt-5">
                <OutgoingProgressBar netRoles={trackSAR.tracking.length-1} currentProgressRole={trackSAR.currentProgressStatus} type={trackSAR.overAllStatus}/>
                <div className="d-flex">
                    {trackSAR.tracking && trackSAR.tracking.map((track,index)=>{
                      return (
                        <div key={'track'+index} className="sectionHeight">
                             <OutgoingBitCustom  isDone={track.status === 1 ? true : false} type={trackSAR.overAllStatus}/>
                             <div className="d-flex flex-column mt-5 txtarea">
                                <div className="role">
                                {track.role}
                                </div>
                                <div className="status">
                                {track.statusName}
                                </div>
                                <div className="date">
                                {track.date}
                                  </div>
                             </div> 
                        </div>
                      )
                    })}
                </div>
          </MainInfoProgress>
        </div>
        :<Loader/>
    } 
    </div>
  </CardLayout>;
}

TrackEAttendenceArea.propTypes = {};

export default TrackEAttendenceArea;
