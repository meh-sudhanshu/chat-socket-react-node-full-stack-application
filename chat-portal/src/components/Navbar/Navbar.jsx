import classes from "./navbar.module.css"

import React from "react";

import { useNavigate } from "react-router-dom";


const Navbar = ()=>{
    let navigate = useNavigate()
    const loginHandler = ()=>{
        navigate("/login")
    }
    const signupHandler=()=>{
        navigate("/signup")
    }
    return(
        <nav className={classes.navbar}>
            <h2 className={classes.logo_txt}>ChatSocket</h2>
            <div className={classes.btn_ctn}>
                <button className={classes.btn} onClick={loginHandler}>Login</button>
                <button className={classes.btn} onClick={signupHandler}>Signup</button>
            </div>
        </nav>
    )
}

export default Navbar