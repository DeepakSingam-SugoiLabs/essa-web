/**
 *
 * Signin
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:500px;
width:500px;
.header-homepage{
  font-size:32px;
  line-height:38px;
  margin-bottom:20px;
  font-family:"sfdisplay-bold"
}
.subheading-homepage{
  font-size:24px;
  line-height:35px;
  letter-spacing:-1.2px;
  text-align:center;
  margin-bottom:40px;
  font-family:"sftext-regular"
}
.circular-background{
  height:150px;
  width:150px;
  background-color:var(--FARAH-gallery);
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
}
`


const Button = styled.button`
height:130px;
width:130px;
text-align:center;
border-radius:50%;
background:linear-gradient(to bottom,var(--FARAH-white),var(--FARAH-wild-sand));
border:none;
outline:none;
transition: 0.2s all;
-webkit-box-shadow:1px 3px 11px 6px rgba(0,0,0,0.15);
-moz-box-shadow: 1px 3px 11px 6px rgba(0,0,0,0.15);
box-shadow: 1px 3px 11px 6px rgba(0,0,0,0.15);
font-size:21px;
color:var(--FARAH-light-grey);
font-family:"sfdisplay-regular";
:focus{
  outline:none;
}
:active{
  transform: scale(0.9)
}
`

function Signin({history}) {
  return <Container className="p-4">
    <div className='header-homepage'>Please Sign In </div>
    <div className="subheading-homepage">You will be redirected to the single sign-on page to complete your authentication</div> 
    <div className="circular-background">
      <Button onClick={()=>{history.push('/signinpin')}}>
        Sign-In
      </Button>
    </div>
  </Container>;
}

Signin.propTypes = {};

export default Signin;
