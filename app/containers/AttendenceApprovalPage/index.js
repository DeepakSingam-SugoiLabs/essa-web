/**
 *
 * AttendenceApprovalPage
 *
 */

import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { MainPage } from "../MainPage";
import {MdKeyboardBackspace} from "react-icons/md"
import Arbtn from "../../components/Arbtn";
import styled from 'styled-components'
import ApprovalArea from "../../components/ApprovalArea";
import { attendanceService } from "../../components/_services/attendenceService";
import Loader from "../../components/Loader";
import moment from "moment";

const ButtonsArea = styled.div`
display:flex;
width:35%;
justify-content:space-between;
.btnlength{
  
}
`

export function AttendenceApprovalPage({history,match}) {
  const [trackSAR,setTrackSAR] = useState(null)
  const [loading,setLoading] = useState(false)
  const [btnLoading,setBtnLoading] = useState(false)
  let {id} = match.params
  
  useEffect(()=>{
    _getExceptionByID()
  },[])

  const _getExceptionByID = async () => {
    setLoading(true)
    await attendanceService
      .getExceptionRequestByIdAPI(id)   //id take care id logic
      .then((response) => {
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
          data.assigned_to_role = response.data.attendance[0].assigned_to_role
          setTrackSAR(data)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }


  const submitCommentHandler = async (comment) => {
    //setComment(comment)
    let data = {}
    data['comments'] = comment
    data['assigned_to_role'] = trackSAR.assigned_to_role
    await _updateExceptionAPI(data)
  }

  const approveHandler = async () => {
    let data = {}
    data['request_status'] = 'completed'
    data['assigned_to_role'] = trackSAR.assigned_to_role
    await _updateExceptionAPI(data)
  }

  const rejectHandler = async () => {
    let data = {}
    data['request_status'] = 'rejected'
    data['comments'] = comment
    data['assigned_to_role'] = trackSAR.assigned_to_role
    await _updateExceptionAPI(data)
  }

  const _updateExceptionAPI = async (data) => {
    console.log('data to update', data)
    setBtnLoading(true)
    await attendanceService
      .updateExceptionAPIOnlyForIncoming(data, 1)
      .then((response) => {
        if (response.data) {
          setBtnLoading(false)
          console.log('incoming smart asset', response.data)
          history.push("/dashboard")
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }



  return <MainPage history={history}>
  {!loading?trackSAR!== null ? <>
    <div className="d-flex justify-content-between">
          <MdKeyboardBackspace size={40} onClick={()=>history.push('/incomingattendence')}/>
          <ButtonsArea>
            <Arbtn title="Accept" accept={true} styles="px-5" callback={approveHandler} disabled={btnLoading}/>
            <Arbtn title="Decline" accept={false} styles="px-5" callback={rejectHandler} disabled={btnLoading}/>
          </ButtonsArea>
          </div> 
          <ApprovalArea data={trackSAR}/>
    </>:<></>:<Loader/>
  }
          
  </MainPage>;
}

AttendenceApprovalPage.propTypes = {
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

export default compose(withConnect)(AttendenceApprovalPage);
