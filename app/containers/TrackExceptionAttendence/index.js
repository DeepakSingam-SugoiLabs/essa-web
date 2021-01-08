/**
 *
 * TrackExceptionAttendence
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { MainPage } from "../MainPage";
import TrackEAttendenceArea from "../../components/TrackEAttendenceArea";
import {MdKeyboardBackspace} from 'react-icons/md';
import styled from 'styled-components'


const Edit = styled.div`
font-size:32px;
color:var(--FARAH-verify-grey);
font-family:"sfdisplay-regular"
`

export function TrackExceptionAttendence({history,match}) {
  let {id} = match.params
  
  return <MainPage history={history}>
    <div className="d-flex justify-content-between mt-2" >
    <MdKeyboardBackspace size={40} onClick={()=>history.push('/outgoingattendence')}/>
    <Edit onClick={()=>history.push(`/exceptionattendence/${id}`)}>EDIT</Edit>
    </div> 
    <TrackEAttendenceArea id={id}/>
  </MainPage>;
  
}

TrackExceptionAttendence.propTypes = {
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

export default compose(withConnect)(TrackExceptionAttendence);
