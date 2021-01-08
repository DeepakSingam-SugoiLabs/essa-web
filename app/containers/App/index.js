/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route,BrowserRouter } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import MainPage from "containers/MainPage"
import DbSection from "components/DbSection"
import { UserInfoSection } from '../UserInfoSection';
import { SmartAttendance } from '../SmartAttendance';
import ExceptionAttendence from '../ExceptionAttendence';
import {SigninPin}  from '../SigninPin';
import { TrackExceptionAttendence } from '../TrackExceptionAttendence';
import { AttendenceApprovalPage } from '../AttendenceApprovalPage';
import PrivateRoute from '../../components/_helpers/PrivateRoute';
import { VolunteerHrsPage } from '../VolunteerHrsPage';
import OutgoingAttendence from '../OutgoingAttendence';
import IncomingAttendence from "../IncomingAttendence"

const AppWrapper = styled.div`
  /* max-width: calc(768px + 16px * 2); */
  margin: 20px 20px; /*margin:0 ;*/
  display: flex;
  min-height: 100%;
  padding: 0 16px; 
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/dashboard" component={DbSection}/>
        <PrivateRoute exact path="/home" component={UserInfoSection}/>
        <PrivateRoute exact path="/dashboard/smartattendence" component={SmartAttendance}/>
        <PrivateRoute exact path="/exceptionattendence/:id" component={ExceptionAttendence}/>
        <Route exact path="/signinpin" component={SigninPin}/>
        <PrivateRoute exact path="/outgoingattendence/trackattendence/:id" component={TrackExceptionAttendence}/>
        <PrivateRoute exact path="/incomingattendence" component={IncomingAttendence}/>
        <PrivateRoute exact path="/incomingattendence/attendenceapproval/:id" component={AttendenceApprovalPage}/>
        <PrivateRoute exact path="/outgoingattendence" component={OutgoingAttendence}/>
        <PrivateRoute exact path="/dashboard/volunteerhrs" component={VolunteerHrsPage}/>
      </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}
