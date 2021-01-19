/**
 *
 * SearchBar
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardLayout from "../CardLayout";
import {BsSearch} from 'react-icons/bs';
import InputField from '../InputField'

const Bar = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
    margin-left: -30px;

.searchbar{
  width: 100px;
  border-radius:30px;
  font-size:30px;
  color:grey;
  margin-left: -21px;
}
.SearchBar1{
  min-width:445px;
}
`



function SearchBar() {
  return <Bar>
        <CardLayout>
          <div className="SearchBar1 d-flex align-items-center container-fluid">
              <BsSearch className="searchbar"/>
              <InputField placeholder="Search"/>
          </div>
        </CardLayout>
       
  </Bar>
}

SearchBar.propTypes = {};

export default SearchBar;
