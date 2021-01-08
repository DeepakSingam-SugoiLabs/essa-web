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
font-size:48px;
line-height:58px;


`

function Heading({title,design=""}) {
  return <div>
    <Head className={design}>{title}</Head>
  </div>;
}

Heading.propTypes = {};

export default Heading;
