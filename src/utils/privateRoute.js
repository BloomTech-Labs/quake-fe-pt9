import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest})=> {

    return (
        <Route {...rest} render= {(RouterProps)=>  
        localStorage.getItem('Authorization') ? (
            <Component  {...RouterProps}/>

        ) : (
            <Redirect to = "/login" />
        )
        }
        />
    );
     
}

export default PrivateRoute;