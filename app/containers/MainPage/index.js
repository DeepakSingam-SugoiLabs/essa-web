/**
 *
 * MainPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import styled from 'styled-components';
import { device } from '../../components/common/device'
import Navbar from '../../components/Navbar'
import CardLayout from "../../components/CardLayout"
import SearchBar from '../../components/SearchBar'
import profilePic from "../../images/profile.png"
import Heading from "../../components/Heading";
import FeatureSection from "../../components/FeatureSection"

const Wrapper = styled.div`
  .main-panel {
    width: 100%;
    margin: auto;
    padding: 10px;
  }
  @media ${device.mobileS} {
    .main-panel {
      width: 100%;
    }
  }
  @media ${device.laptopL} {
    .main-panel {
      width: 80%;
    }
  }
`

const Layout = styled.div`
width:70%;
`
const TopHeaders = styled.div`
display:flex;
justify-content:space-between
`

const Image = styled.img`
height:60px;
width:60px;
`
export function MainPage({history,children}) {
  return <div className="d-flex">
       <div className="col-lg-2 col-md-1 col-sm-3">
       <Layout>
        <CardLayout>
           <Navbar history={history}/>
        </CardLayout>
       </Layout>
       </div>
       <div className="col-lg-10 col-md-11 col-sm-7 ">
       <TopHeaders>
          <SearchBar/>
          <CardLayout>
            <Image src={profilePic}/>
          </CardLayout>
        </TopHeaders>
        {children}
       </div>
  </div>

  
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(withConnect)(MainPage);
