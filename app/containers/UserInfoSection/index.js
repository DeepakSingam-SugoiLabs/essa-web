/**
 *
 * UserInfoSection
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { MainPage } from "../MainPage";
import Heading from "../../components/Heading";
import InfoCard from "../../components/InfoCard";

export function UserInfoSection({history}) {
  return <MainPage history={history}>
    <Heading title="Home" style="
    margin-top: 17px;
    margin-bottom: 43px;"/>
    <InfoCard />
  </MainPage>;
}

UserInfoSection.propTypes = {
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

export default compose(withConnect)(UserInfoSection);
