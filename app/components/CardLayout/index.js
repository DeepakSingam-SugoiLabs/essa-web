/**
 *
 * CardLayout
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`

  position: relative;
  background: var(--FARAH-white);
  color: var(--FARAH-black);
  border-radius: 20px;
  margin: 10px 0;
  -webkit-box-shadow: 5px 4px 22px 0px rgba(0,0,0,0.15);
-moz-box-shadow: 5px 4px 22px 0px rgba(0,0,0,0.15);
box-shadow: 5px 4px 22px 0px rgba(0,0,0,0.15);
  overflow: hidden;
  .hr-card-content {
    font-size: 14px ; 
  }
`

function CardLayout({children}) {
  return (
    <CardWrapper>
      <div className="hr-card-content"> {children}</div>
    </CardWrapper>
  )
}

CardLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardLayout;