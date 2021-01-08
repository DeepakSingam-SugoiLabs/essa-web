import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../Loader';
import { authservice } from '../_services/authservice';

const PrivateRoute = ({
    path,
    component,
    location,
    userState,
    successAction,
  }) => {
    const [loginStatus, setLoginStatus] = useState({
      isLogged: false,
      gotUnswerFromServer: false,
    });

    const isLoginAPI = async() =>{
        await authservice.guardAPI().then((response)=>{
            if(response.status===200){
                setLoginStatus({ gotUnswerFromServer: true, isLogged: true });
            }
        }).catch((err)=>{
            setLoginStatus({ gotUnswerFromServer: true, isLogged: false });
        })
    }

    useEffect(() => {
        isLoginAPI()
    }, []);
         
  
    return loginStatus.gotUnswerFromServer ? (
      loginStatus.isLogged ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      )
    ) : (
      <Loader/>
    ); //this null can be repaced by the loader later
  };

export default PrivateRoute;