import React, { useState } from "react";
import { useRef } from "react";
import { registerComplaint } from "../../constants/userApis";
import classes from './complaint.module.css'
import axios from "axios";

const Complaint = ()=>{

    const inputRef = useRef(null)

    const complaintHandler = async (e)=>{
        const value = inputRef.current.value
        console.log(value);
        const response = await axios.post(registerComplaint,{
            value:value
        })
    }


    return(
        <div className={classes.main}>
            <form className={classes.cp_form}>
                <input type="textarea" 
                    className={classes.cp} 
                    placeholder="Enter Your complaint here"
                    ref={inputRef}/>
                <button 
                    className={classes.btn}
                    onClick={complaintHandler}
                
                >Register Complaint</button>
            </form>
        </div>
    )

}


export default Complaint