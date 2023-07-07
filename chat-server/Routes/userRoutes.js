import express from 'express'

import { registerUser } from '../Controllers/userController.js'


const userRoutes = express.Router()

const users = []

userRoutes.post("/register",(req,res)=>{
    const userData = req.body
    const response = registerUser(userData)
    res.send({
        message:response.message,
        token:response.token,
        refreshToken:response.refreshToken
    })

})


export default userRoutes