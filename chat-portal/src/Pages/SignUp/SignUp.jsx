import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

import axios from 'axios'

import classes from './signup.module.css'
import {passwordWarning,nameWarning} from '../../constants/inputInfos'
import { signUpApi } from "../../constants/userApis";

const SignUp = ()=>{
    let navigate = useNavigate()

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confPassword,setConfPassword] = useState("")

    const [responseData,setResponseData] = useState(null)

    const [passwordFlag,setPasswordFlag] = useState(false)
    const [nameFlag,setNameFlag] = useState(false)

   
    const postRegister = ()=>{
        const token = localStorage.getItem("token")
        const refreshToken = localStorage.getItem("refreshToken")
        const tokens = {
            token:token,
            refreshToken:refreshToken
        }
        navigate("/user-page",{state:{tokens}})
    }


    const registerUser = async (userData)=>{
        if(name.length<=5){
            setNameFlag(true)
        }
        if(userData.password !== userData.confPassword || password.length <=5){
            setPasswordFlag(true)
            return
        }
        const api = signUpApi
        const response = await axios.post(api,userData)

        console.log(response)
        setResponseData(response.data)
    }

    useEffect(()=>{
        if(responseData){
            localStorage.setItem("token",responseData.token)
            localStorage.setItem("refreshToken",responseData.refreshToken)
            postRegister()
        }
    },[responseData])

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
                {nameFlag && <h2 className={classes.warning}>{nameWarning}</h2>}

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
                {passwordFlag && <h2 className={classes.warning}>{passwordWarning}</h2>}

                <button className={classes.submit_btn} onClick={submitHandler}>Sign Up</button>
            </form>
            <div className={classes.info_ctn}>
                <h2 className={classes.rights_txt}>All rights reserved <span>@sudhanshu</span></h2>
            </div>
        </div>
    )
}


export default SignUp