/**
 *
 * ExceptionAttendence
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { MainPage } from "../MainPage";
import {MdKeyboardBackspace} from 'react-icons/md';
import ExceptionArea from "../../components/ExceptionArea";

export function ExceptionAttendence({history,match}) {
  let {id}=match.params

  return <MainPage history={history}>
            <MdKeyboardBackspace size={40} onClick={()=>history.push('/outgoingattendence')}/>
            <ExceptionArea history={history} id={id}/>
         </MainPage>;
}

ExceptionAttendence.propTypes = {
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

export default compose(withConnect)(ExceptionAttendence);
