/**
 *
 * OutgoingProgressBar
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';



const GRADIENT_COLORS = [{
  color:"linear-gradient(to right,#ffffff, #f2f2f2)"
},
{
  color:"linear-gradient(to right,#ffecb3, #ff8f00)"
},
{
  color:"linear-gradient(to right,#10a564, #3ab990)"
},
{
  color:"linear-gradient(to right,#EC3B43, #FA7B81)"
}
]


function OutgoingProgressBar({netRoles=0,type=0,currentProgressRole = 0}) {
  
  const _getcolor = (type) => {
    switch(type){
      case 0 :
        return GRADIENT_COLORS[1].color
      case 1:
        return GRADIENT_COLORS[2].color
      case 2:
        return GRADIENT_COLORS[3].color
      default:
        return GRADIENT_COLORS[1].color

      }
  }

  const MainLineArea  = styled.div`
    width: ${netRoles*200}px;
    position:relative;
    height:20px;
  .gradient_one{
    width: ${netRoles*200}px;
    background:${GRADIENT_COLORS[0].color};
    position:absolute;
    height:20px;
    border-radius:10px;
  }
  .gradient_two{
    width:${currentProgressRole*205}px;
    height:20px;
    position:absolute;
    background:${_getcolor(type)};
    border-radius:10px;
  }
  `


  return <MainLineArea wid={75*netRoles}>
          <div className="gradient_one">
              
          </div>
          <div className="gradient_two">
             
          </div>
        </MainLineArea>;
}

OutgoingProgressBar.propTypes = {};

export default OutgoingProgressBar;
