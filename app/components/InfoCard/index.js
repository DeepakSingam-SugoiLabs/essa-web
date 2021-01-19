/**
 *
 * InfoCard
 *
 */

import React from "react";
import CardLayout from "../CardLayout";
import HeadingSecondary from "../HeadingSecondary"
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import news from '../../images/news.png'

const Section = styled.div`
margin-left:5%;
margin-right:10%;
margin-bottom:5%;
.namehead{
  font-size:20px;
}
.subhead{
  font-family:"sfpro-regular";
  font-size:21px;
  line-height:25px;
  color:var(--FARAH-verify-grey)
}
.notify{
    font-family:"sfpro-bold";
    font-size:21px;
    line-height:25px; 
    color:var(--FARAH-notify-blue)
  } 
  .controlwidth{
    width:40%;
  }
`

const HoursSubHead = styled.div`
font-family:'sfdisplay-regular';
font-size:14px;
line-height:17px;
color:var(--FARAH-verify-grey)
`

const Centered = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
margin-bottom:10px;
`
const HCardArena = styled.div`
height:93px;
width:93px;
margin-left:1%;
`
const NewsHeading = styled.div`
font-family:'sfdisplay-bold';
font-size:18px;
line-height:24px;
`
const NewsDate = styled.div`
font-family:"sftext-regular";
font-size:9px;
line-height:11px;
color:var(--FARAH-verify-grey);
`
const NewsArea = styled.div`
width:250px;
height:280px;
margin-top:2%;

`

const dt = [{
  hours:15,
  title:"leave hours"

},
{
  hours:24,
  title:"Weekly Hours"
  
},
{
  hours:7,
  title:"Pending Request",
}
]

const newsdt = [{
  heading:"Mohammed Bin Rashid Inaugurates the Dubai Future Labs",
  date:"July 11th, 2020",
  image:news
},
{
  heading:"Mohammed Bin Rashid Inaugurates the Dubai Future Labs",
  date:"July 11th, 2020",
  image:news
},
{
  heading:"Mohammed Bin Rashid Inaugurates the Dubai Future Labs",
  date:"July 11th, 2020",
  image:news
},
{
  heading:"Mohammed Bin Rashid Inaugurates the Dubai Future Labs",
  date:"July 11th, 2020",
  image:news
}

]



const MyhoursCard = ({title,subtitle}) => {
  return (
    <HCardArena>
        <CardLayout>
          <Centered className="my-3 mx-3">
          <HeadingSecondary title={title}/>
          <HoursSubHead>{subtitle}</HoursSubHead>
          </Centered>
        </CardLayout>
    </HCardArena>
  )
}


const NewsUpdateCard = ({image,title,date}) => {
  return (
    <NewsArea>
      <CardLayout>
          <div className="d-flex flex-column mx-3 my-3">
          <img src={image} height='145px' width='216px' className="rounded-lg"/>
          <NewsHeading className="my-2">{title}</NewsHeading>
          <NewsDate className="mb-2">{date}</NewsDate> 
          </div>
      </CardLayout>
    </NewsArea>
  )
}

function InfoCard() {
  
  return <CardLayout>
    <Section>
    <HeadingSecondary className="namehead" style="font-size:28px;" title="Hi Ahmed" design="mt-4 mb-2"/>
    <div className="subhead">You have <span className="notify">5 incoming requests</span> today</div>
    <div className="d-flex row justify-content-between controlwidth my-3">
    {dt.map((item)=>{
          return <MyhoursCard title={item.hours} subtitle={item.title}/>
    })}
    </div>
    <HeadingSecondary title="Latest Updates" design="mt-5"/>
    <div className="d-flex row justify-content-between">
      {newsdt.map((item)=>{
        return <NewsUpdateCard title={item.heading} image={item.image} date={item.date}/> 
      })}
    </div> 
    </Section>
  </CardLayout>;
}

InfoCard.propTypes = {};

export default InfoCard;
