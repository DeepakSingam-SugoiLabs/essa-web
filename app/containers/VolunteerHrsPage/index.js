/**
 *
 * VolunteerHrsPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { MainPage } from "../MainPage";
import styled from 'styled-components';
import {MdKeyboardBackspace} from 'react-icons/md'
import Heading from "../../components/Heading";
import VolunteerhrsArea from "../../components/VolunteerhrsArea";

const AlignItems = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
.pointer{
  cursor:pointer;
}
`

export function VolunteerHrsPage({history}) {
  return <MainPage history={history}>
          <AlignItems>
            <MdKeyboardBackspace size={40} onClick={()=>history.push('/dashboard')} className="pointer"/>
            <Heading title="Volunteer Hours Tracking" design="ml-3"/>
        </AlignItems>
        <VolunteerhrsArea history={history}/>
  </MainPage>;
}

VolunteerHrsPage.propTypes = {
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

export default compose(withConnect)(VolunteerHrsPage);
