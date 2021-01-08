/**
 *
 * InputField
 *
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


let InputTag = styled.input`
  font-family: var(--HSL-PTSansFont);
  background: #ffffff;
  border: 1px solid
    ${(props) =>
      props.errors ? "var(--HSL-ErrorRed)" : "var(--HSL-InputBorder)"};
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 10px 30px 10px 12px; */
  font-size: 1.5em;
  line-height: 32px;
  font-style: normal;
  width: 100%;
  height: 64px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
let LabelField = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125em;
  display: flex;
  color: var(--HSL-LightWarmGrey);
  font-family: var(--HSL-PTSansFont);
  margin: 0;
`;
let InputWrapper = styled.div`
  position: relative;
  .alert-arrow {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;
function InputField({
  name,
  label,
  errors,
  placeholder,
  onChange,
  type,
  onBlur,
  className,
  value
}) {
  return (
    <InputWrapper>
      <LabelField htmlFor={name}>{label}</LabelField>
      <InputTag
        errors={errors || false}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type}
        onBlur={onBlur}
        className={className}
        value={value}
      />
      
    </InputWrapper>
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errors: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default InputField;
