import React from "react";

import { useJwt } from "react-jwt";

const UserPage = ()=>{
    const token = localStorage.getItem("token")
    const {decodedToken} = useJwt(token)
    console.log(decodedToken)
    console.log(token)
    return(
        <h2>{decodedToken}</h2>
    )
}


export default UserPage