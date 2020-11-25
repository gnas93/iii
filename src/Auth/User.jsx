<<<<<<< HEAD
import React, { Component } from 'react';
import { Route , Redirect } from 'react-router-dom'
const Auth = ({component:Component,...rest}) => {
    return <Route {...rest} render={(props)=>{
        if(localStorage.getItem("loginUser")){
            return <Component {...props}/>
        }
        alert("Bạn chưa đăng nhập");
        return <Redirect to="/signin" />
    }} 
    />
}
=======
import React, { Component } from 'react';
import { Route , Redirect } from 'react-router-dom'
const Auth = ({component:Component,...rest}) => {
    return <Route {...rest} render={(props)=>{
        if(localStorage.getItem("loginUser")){
            return <Component {...props}/>
        }
        alert("Bạn chưa đăng nhập");
        return <Redirect to="/signin" />
    }} 
    />
}
>>>>>>> 890fb48fb7d9ab7c0ae3d7207cddf3ef732d7532
export default Auth