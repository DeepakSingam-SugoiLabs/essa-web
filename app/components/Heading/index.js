/**
 *
 * Heading
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Head = styled.div`
font-family:"sfdisplay-bold";
font-size:30px;
line-height:58px;
margin-top:20px;
margin-bottom:30px;

`

function Heading({title,design=""}) {
  return <div>
    <Head className={design}>{title}</Head>
  </div>;
}

Heading.propTypes = {};

export default Heading;
