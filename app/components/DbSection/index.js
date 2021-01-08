/**
 *
 * DbSection
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import MainPage from '../../containers/MainPage'
import Heading from "../Heading";
import FeatureSection from "../FeatureSection"
import { FIRSTNAME } from "../_helpers/constant";
function DbSection({history}) {
  const name = localStorage.getItem(FIRSTNAME)
  const title = `Hi ${name} , How can I help you ?` 
  return <MainPage history={history}>
        <Heading title={title} design="mt-3"/>
        <FeatureSection/>
  </MainPage> ;
}

DbSection.propTypes = {};

export default DbSection;
