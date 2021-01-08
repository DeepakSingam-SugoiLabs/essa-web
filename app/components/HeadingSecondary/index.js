/**
 *
 * HeadingSecondary
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
 import styled from 'styled-components';

const Head = styled.div`
font-family:"sfdisplay-bold";
font-size:32px;
line-height:38px;
`

function HeadingSecondary({title,design=""}) {
  return <div>
  <Head className={design}>{title}</Head>
</div>;
}

HeadingSecondary.propTypes = {};

export default HeadingSecondary;
