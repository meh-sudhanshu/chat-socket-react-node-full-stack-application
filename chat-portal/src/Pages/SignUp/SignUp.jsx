import React, { useState } from "react";
import axios from 'axios'

import classes from './signup.module.css'

const SignUp = ()=>{

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confPassword,setConfPassword] = useState("")

    const [passwordFlag,setPasswordFlag] = useState(false)
    const [nameFlag,setNameFlag] = useState(false)

    const registerUser = (userData)=>{
        if(name.length<=5){
            setNameFlag(true)
        }
        if(userData.password !== userData.confPassword){
            console.log(userData)
            setPasswordFlag(true)
            return
        }
        const api = "http://localhost:8080/user/register"
        const response = axios.post(api,userData)

        response.then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })

        
    }

    const nameHandler = (e)=>{
        setName(e.target.value)
        setPasswordFlag(false)
        setNameFlag(false)
    }

    const emailHandler = (e)=>{
        setEmail(e.target.value)
        setPasswordFlag(false)
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        setPasswordFlag(false)
    }
    const confPasswordHandler = (e)=>{
        setConfPassword(e.target.value)
        setPasswordFlag(false)
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        const userData = {
            name:name,
            email:email,
            password:password,
            confPassword:confPassword
        }
        setConfPassword("")
        setPassword("")
        setName("")
        setEmail("")
        registerUser(userData)
    }
    return(
        <div className={classes.main}>
            <form className={classes.signup_form}>
                <input className={classes.ip} 
                    type="text"
                    placeholder="Enter full name"
                    onChange={nameHandler}
                    value={name}/>
                {nameFlag && <h2 className={classes.warning}>Name should be more than 5 characters in length</h2>}

                <input className={classes.ip} 
                        type="email" 
                        placeholder="Enter email"
                        onChange={emailHandler}
                        value={email}/>

                <input className={classes.ip} 
                        type="password" 
                        placeholder="Choose password"
                        onChange={passwordHandler}
                        value={password}/>

                <input className={classes.ip} 
                        type="password" 
                        placeholder="Confirm password"
                        onChange={confPasswordHandler}
                        value={confPassword}/>
                {passwordFlag && <h2 className={classes.warning}>password and confirm password does not match</h2>}

                <button className={classes.submit_btn} onClick={submitHandler}>Sign Up</button>
            </form>
            <div className={classes.info_ctn}>
                <h2 className={classes.rights_txt}>All rights reserved <span>@sudhanshu</span></h2>
            </div>
        </div>
    )
}


export default SignUp