/**
 *
 * SigninPin
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import CardLayout from "../../components/CardLayout";
import styled from 'styled-components';
import ReactCodeInput from 'react-code-input';
import SubmitButton from "../../components/SubmitButton";
import {authservice} from '../../components/_services/authservice'
import { FIRSTNAME, USER_TOKEN } from "../../components/_helpers/constant";



const LabelOne = styled.div`
  font-family: ${props=>props.fontfamily};
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: -1.1px;
  color: var(--FARAH-small-grey);
  text-align:center;
`
const LabelTwo = styled.div`
font-family:"sfdisplay-bold";
font-size:32;
font-size: 32px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.19;
letter-spacing: normal;
text-align: center;
color:var(--FARAH-zed-black);
`

const CardArea = styled.div`
height:593px;
width:593px;
top:50%;
left:50%; 
transform: translate(-50%,-50%); 
position:absolute;
.btnsubmit{
  margin-bottom:67px;
}
.sbtbtn{
  margin-top:47px;
  font-size:24px;
  line-height:29px;
  font-family:"sfdisplay-bold";
  height: 66px;
  width:192px;
}
.pinlayout{
  margin-top:40px;
  margin-bottom:50px;
}
`
const ErrorMessage = styled.div`
  font-family: "sftext-regular";
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: -1.1px;
  color: var(--FARAH-error-red);
  text-align:center;
  margin-top:20px;
`


export function SigninPin({history}) {
  const [pin,setPin] = React.useState(null)
  const [error,setError] = React.useState({
    message:"",
    show:false,
  })
  const [loading,setLoading] = React.useState(false)
  

  const props={
        inputStyle:{
          height:"100px",
          width:"86px",
          border:"none",
          boxShadow:"5px 4px 22px 0px rgba(0,0,0,0.15)",
          margin:"10px",
          fontSize:"50px",
          textAlign: "center",
          borderRadius: "10px"
        }
  }

  const handleSignin = async () => {
    setLoading(true)
    let data = {}
    data.deviceId = 'qwerty'
    data.pin = pin
    await authservice.loginUserAPI(data).then((response)=>{
      setLoading(false)
      localStorage.setItem(FIRSTNAME,response.data.user["first_name"])
      localStorage.setItem(USER_TOKEN,response.data.tokens.refresh.token)
      history.push('dashboard')
    }).catch((err)=>{
      setLoading(false)
      setError({...error,show:true,message:err.response.data.message})
    })
  }

  const handlePinChange = (value) => {
    setPin(value)
    }

  return <CardArea>
            <CardLayout>
              <LabelOne className="mt-5" fontfamily="sftext-bold">Sign In</LabelOne>
              <LabelTwo className="mt-3">Enter your PIN</LabelTwo>
              {error.show && <ErrorMessage>{error.message}</ErrorMessage>}
              <div className="d-flex flex-column align-items-center pinlayout">
                  <ReactCodeInput type="password" fields={4} {...props} onChange={(value)=>handlePinChange(value)} />
              </div>
              <LabelOne className="mt-5" fontfamily="sftext-regular">Forgot your PIN?</LabelOne>
              <div className="d-flex flex-column align-items-center btnsubmit">
                <SubmitButton title="Sign In" callback={handleSignin} styles="sbtbtn" disabled={loading}/>
              </div>
            </CardLayout>
        </CardArea>
}

SigninPin.propTypes = {
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

export default compose(withConnect)(SigninPin);
