/**
 *
 * OutgoingBitCustom
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import YellowBitTick  from '../common/images/YellowBitTick'
import  GreenBitTick  from '../common/images/GreenBitTick'
import  RedBitTick  from '../common/images/RedBitTick'
import styled from "styled-components";
function OutgoingBitCustom({ isDone, type }) {
  const BitView = styled.div`
  width:5%;
  height:5%;
  border-radius:50%;
  background:var(--FARAH-white);
  justify-content:center;
  align-items:center;

  `
  const _getBand = (type) => {
    switch (type) {
      case 0:
        return <YellowBitTick/>
      case 1:
        return <GreenBitTick/>
      case 2:
        return <RedBitTick />
      default:
        return <YellowBitTick />
    }
  }
  return <BitView>
  {isDone ? _getBand(type):<></>}
  </BitView>;
}

OutgoingBitCustom.propTypes = {};

export default OutgoingBitCustom;
