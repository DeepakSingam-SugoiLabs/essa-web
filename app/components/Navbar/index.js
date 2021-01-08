/**
 *
 * Navbar
 *
 */

import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import placeholder from "../../images/placeholder.png"
import HomeIconunselect from "../common/icons/NavbarIcons/HomeIconunselect";
import HomeIconselect from "../common/icons/NavbarIcons/HomeIconselect";

import Dashboardunselect from "../common/icons/NavbarIcons/Dashboardunselect";
import Dashboardselect from "../common/icons/NavbarIcons/Dashboardselect";
import Chatunselect from "../common/icons/NavbarIcons/Chatunselect";
import Incomingunselect from "../common/icons/NavbarIcons/Incomingunselect";
import Incomingselect from "../common/icons/NavbarIcons/Incomingselect";

import Sentunselect from "../common/icons/NavbarIcons/Sentunselect";
import Sentselect from "../common/icons/NavbarIcons/Sentselect";


const Container = styled.div`
height:80vh;
display:flex;
margin:0;
padding:0;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
`
const IconsArea = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
height:70%;
margin:0;
padding:0;
`
const Pholder = styled.div`
margin-top:-30px

`

function Navbar({history}) {
  console.log("history",history.location.pathname.split("/")[1])
  const path = history.location.pathname.split("/")[1]
  const [selectedIcon,setSelectedIcon] = useState({
    home:false,
    dashboard:false,
    chat:false,
    sent:false,
    incoming:false,
  })

  useEffect(()=>{
      setSelectedIcon({...selectedIcon,dashboard:false,home:false,chat:false,sent:false,incoming:false})
      handlePath()
  },[history.location.pathname])


  const handlePath = () => {
    switch(path){
      case "dashboard" : 
          setSelectedIcon({...selectedIcon,dashboard:true})
          break;
      case "home" :
        setSelectedIcon({...selectedIcon,home:true})
        break;
      case "outgoingattendence":
        setSelectedIcon({...selectedIcon,sent:true})
        break;
      case "incomingattendence":
        setSelectedIcon({...selectedIcon,incoming:true})
        break;
    }
  }

  return (<Container >
  <Pholder>
  <img src={placeholder} alt="placeholder"/>
  </Pholder>
    
  <IconsArea>
    <div onClick={()=>{history.push("/home")}}>
    {selectedIcon.home ? <HomeIconselect/>:<HomeIconunselect/>}
    </div>
    <div onClick={()=>{history.push("/dashboard")}}>
    {selectedIcon.dashboard ? <Dashboardselect/>:<Dashboardunselect/>}
    </div>
    <div>
    <Chatunselect/>
    </div>
    <div onClick={()=>{history.push("/outgoingattendence")}}>
    {selectedIcon.sent ? <Sentselect/>:<Sentunselect/>}
    </div>
    <div onClick={()=>{history.push("/incomingattendence")}}>
    {selectedIcon.incoming ? <Incomingselect/>:<Incomingunselect/>}
    </div>
  </IconsArea>
  </Container>
  )
}

Navbar.propTypes = {};

export default Navbar;
