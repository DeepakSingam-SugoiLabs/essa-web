/**
 *
 * FeatureSection
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardLayout from "../CardLayout";

import {data} from '../../components/common/AllData/dashboarddata'
import { Link } from "react-router-dom";

const Card = styled.div`
width:280px;
height:240px;
`

const StyledLink = styled(Link)`
    text-decoration: none ;
    color:var(--FARAH-zed-black);
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color:var(--FARAH-zed-black);
    }
`;

const Centered = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
margin:20px ;
.subheading{
  font-size:27px;
  font-family:"sfdisplay-light";
  line-height: 34px;
  text-align:center;
  margin-top:10px;
}

`


function FeatureSection() {
  

  const DataCard = ({name,icon,link}) => {
    return (<Card>
        <CardLayout>
        <StyledLink to={link} style={{textDecoration:'none'}}>
        <Centered>
        {icon}
        <div className="subheading">{name}</div>
        </Centered>
        </StyledLink>
        </CardLayout>
  </Card>
    )
  }

  return (
    <div className="d-flex justify-content-between row mt-5">
      {data.map((item,i)=>{
          return <DataCard name={item.name} icon={item.icon} link={item.link} key={i}/>
      })}
    </div>
  )
}

FeatureSection.propTypes = {};

export default FeatureSection;
