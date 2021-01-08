/**
 *
 * ApprovalArea
 *
 */

import React, { useEffect, useState } from "react";
import CardLayout from "../CardLayout";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeadingSecondary from "../HeadingSecondary";
import profilePic from "../../images/profile.png"
import Loader from "../Loader";
import { attendanceService } from "../_services/attendenceService";
import moment from "moment";


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
const HeadingLight = styled.div`
font-family: "sfdisplay-light";
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: var(--FARAH-zed-black);
  margin-top:25px;
`
const AttachmentArea = styled.div`
width:168px;
height:106px;
`
const PostedOn = styled.div`
  font-family: "sfdisplay-light";
  font-size: 21px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  
  text-align: left;
  color:var(--FARAH-zed-black);

.boldnature{
  font-family: "sfdisplay-bold";
  font-weight: 300;
  letter-spacing: -1.05px;
}
`
const NameSection = styled.div`
display:flex;
align-items:center;
width:23%;
justify-content:space-between;
.usersname{
font-family:"sfdisplay-light";
font-size:21px;
line-height:25px;
color:var(--FARAH-zed-black);
}
`

function ApprovalArea({data}) {
    
  const [trackSAR,setTrackSAR] = useState(data)
  
  const AttachmentCard = ({imageurl,title}) => {
    return (
    <AttachmentArea >
      <CardLayout>
      <div className="d-flex flex-column justify-content-center align-items-center pt-2">
        <img src={imageurl} alt="" height="67px" width="148px"/>
        
        <div className="my-2">{title}</div>
        </div> 
      </CardLayout>
    </AttachmentArea>
    )
  }

  return <CardLayout>
     <div className="row">
      <div className="col-md-6 ml-4 mt-4">
            <HeadingSecondary title="Smart Attendance" design="mb-2"/>
            <ReasonText className="mb-4">AI confrence</ReasonText>
            <CardLayout>
              <div className="d-flex justify-content-between my-3 px-3">
                <Date>{trackSAR.date}</Date>
                <NameSection>
                  <img src={profilePic} alt="profilepic" className="rounded-circle" height={30} width={30}/>
                  <div className="usersname">{trackSAR.userName}</div>
                </NameSection>
              </div>
            </CardLayout>
            <HeadingLight>Attachments</HeadingLight>
            <div className="row mb-5">
                {trackSAR.attachment_link.map((file)=>{
                    return (
                      <AttachmentCard title={file.name} imageurl={file.uri}/>
                    )
                })} 
            </div>
            <PostedOn className="mb-3">
                 <div> Posted On <span className="boldnature">{trackSAR.postedOn}</span></div>       
            </PostedOn>
      </div>
  </div>
  </CardLayout>;
}

ApprovalArea.propTypes = {};

export default ApprovalArea;
