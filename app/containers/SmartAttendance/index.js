/**
 *
 * SmartAttendance
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { MainPage } from "../MainPage";
import Heading from "../../components/Heading";
import {MdKeyboardBackspace} from 'react-icons/md';
import styled from 'styled-components';
import ClockIn from '../../components/ClockIn'

const AlignItems = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
.pointer{
  cursor:pointer;
}
`

export function SmartAttendance({history}) {
  return <MainPage history={history}>
        <AlignItems>
        <MdKeyboardBackspace size={40} onClick={()=>history.push('/dashboard')} className="pointer"/>
        <Heading title="Smart Attendence" design="ml-3"/>
        </AlignItems>
        <ClockIn history={history} style="height: 550px;"/>
  </MainPage>;
}

SmartAttendance.propTypes = {
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

export default compose(withConnect)(SmartAttendance);
