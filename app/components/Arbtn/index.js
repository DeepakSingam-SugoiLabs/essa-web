/**
 *
 * Arbtn
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
const MyBtn = styled.button`
padding:1% 5%;
border:none;
border-radius:33px;
background:${props=>props.accept ? "linear-gradient(105deg,#10a564 2%,#3ab990 99%)" : "linear-gradient(105deg,#ec3b43 2%, #f15b61 99%)"};
font-family:"sfdisplay-bold";
font-size:22px;
line-height:26px;
color:var(--FARAH-white);
letter-spacing:-1.1px;
box-shadow: ${props=>props.accept ?"0 10px 20px 0 rgba(43, 206, 90, 0.2)":"box-shadow: 0 10px 20px 0 rgba(206, 43, 43, 0.15);"};
border: solid 1px rgba(0, 0, 0, 0);
transition: 0.2s all;
:focus{
  outline: none;
}
:active{
  transform: scale(0.9)
}
`
function Arbtn({title,callback,styles,disabled=false,accept=true,showLoader=false}) {
  return <MyBtn onClick={callback} className={styles} disabled={disabled} accept={accept}>
    {title}
    {disabled && showLoader && <div className="spinner-border ml-3 text-light spinner-border-sm" role="status">
                  </div>}
  </MyBtn>;
}

Arbtn.propTypes = {};

export default Arbtn;
