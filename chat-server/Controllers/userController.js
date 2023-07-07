import { getUserByEmail } from "../Database/userDb.js"
import { saveUser } from "../Database/userDb.js"

import dotenv from 'dotenv'

import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

dotenv.config()

let _id = 1


export const registerUser = (user)=>{
    const userEmail = user.email
    const emailFlag = getUserByEmail(userEmail)
    if(emailFlag != null){
        return {
            message:`user with email ${userEmail} already exists`,
            statusCode:"Not Ok"
        }
    }
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(user.password,salt)
    const hashedConfPassword = bcrypt.hashSync(user.confPassword,salt)

    user.password = hashedPassword
    user.confPassword = hashedConfPassword
    user._id = _id

    const token = jsonwebtoken.sign({userId:_id},process.env.JWT_SECRET_KEY,{expiresIn:"15M"})
    const refreshToken = jsonwebtoken.sign({userId:_id},"382yriebfiugbwe",{expiresIn:"15M"})
    user.token = token
    user.refreshToken = refreshToken

    saveUser(user)

    return {
        message:"registration successfull",
        token:token,
        refreshToken:refreshToken,
        secretKey:process.env.JWT_SECRET_KEY,
        statusCode:"OK"
    }

}