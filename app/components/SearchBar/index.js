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
`



function SearchBar() {
  return <Bar>
        <CardLayout>
          <div className="d-flex align-items-center container-fluid">
              <BsSearch className="mr-3 ml-3"/>
              <InputField placeholder="Search"/>
          </div>
        </CardLayout>
       
  </Bar>
}

SearchBar.propTypes = {};

export default SearchBar;
