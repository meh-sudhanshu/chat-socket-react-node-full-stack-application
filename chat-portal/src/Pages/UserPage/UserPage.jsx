import React from "react";
import classes from './user_page.module.css'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {decodeToken, isExpired} from "react-jwt"

const UserPage = ()=>{
    let navigate = useNavigate()
    const location = useLocation()
    const tokens = location.state.tokens

    const decodedToken = decodeToken(tokens.token)
    const decodecRefreshToken = decodeToken(tokens.refreshToken)

    console.log(decodedToken)
    console.log(decodecRefreshToken)

    const complaintHandler = () =>{
        navigate("/register-complaint")
    }

    console.log(isExpired(tokens.token))
    return(
        <div className={classes.main}>
            <div className={classes.box}>
                <h2>Hello Sudhanshu, welcome to control center</h2>
                <div className={classes.btn_ctn}>
                    <button className={`${classes.btn} ${classes.cp}`} onClick={complaintHandler}>Register a complaint</button>
                    <button className={`${classes.btn} ${classes.cr}`}>Enter ChatRoom</button>
                </div>
            </div>
        </div>
    )
}


export default UserPage