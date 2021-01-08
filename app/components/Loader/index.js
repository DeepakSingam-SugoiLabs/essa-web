/**
 *
 * Loader
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Loader({small=false,color=""}) {
  return <div className={small ? `spinner-border spinner-border-sm ml-1 ${color}`:`spinner-border ml-1 ${color}`} role="status">
</div>;
}

Loader.propTypes = {};

export default Loader;
