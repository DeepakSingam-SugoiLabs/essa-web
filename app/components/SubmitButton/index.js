/**
 *
 * SubmitButton
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const MyBtn = styled.button`
white-space: nowrap;
width: 18%;
height: 60px;
border:none;
border-radius:33px;
background:linear-gradient(to right,#37a2ff,#6287fb,#6386fb);
font-family:"sfdisplay-bold";
font-size:18px;
box-shadow: 0 10px 20px 0 rgba(60, 159, 254, 0.3);
line-height:24px;
border: solid 1px rgba(0, 0, 0, 0);
color:var(--FARAH-white);
transition: 0.2s all;
opacity:${props=>props.disabled ? .4 : 1};
:focus{
  outline: none;
}
:active{
  transform: scale(0.9)
}
`

function SubmitButton({title,callback,styles,disabled=false ,showLoader}) {
  return <MyBtn onClick={callback} className={styles} disabled={disabled}>
    {title}
    {disabled && showLoader &&  <div className="spinner-border ml-3" role="status">
                  </div>}
  </MyBtn>;
}

SubmitButton.propTypes = {};

export default SubmitButton;
