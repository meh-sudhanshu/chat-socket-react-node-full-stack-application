import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './Routes/userRoutes.js'

const app = express()
app.use(express.json())


let corsOptions = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

app.use("/user",userRoutes)

app.listen(8080,(err)=>{
    if(err){
        console.log("Something went wrong")
    }else{
        console.log("server is up an running on port 8080")
    }
})