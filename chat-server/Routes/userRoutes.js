import express from 'express'

import { registerUser } from '../Controllers/userController.js'

import { registerComplaint } from '../Controllers/userController.js'


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

userRoutes.post("/register-complaint",(req,res)=>{
    const data = req.body
    registerComplaint(data)
})

export default userRoutes