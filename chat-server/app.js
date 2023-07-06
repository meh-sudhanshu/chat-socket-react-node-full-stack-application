import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())

let corsOptions = {
    origin:"http://localhost:3000"
}

const users = []

app.use(cors(corsOptions))

app.post("/user/register",(req,res)=>{
    const userData = req.body
    const {name,email,password,confPassword} = userData
    for(var i=0;i<users.length;i++){
        const userEmail = users[i].email
        if(userEmail === email){
            res.send({
                message:"User already exist"
            })
        }
    }
    res.send({
        message:"User registered succesfully"
    })
})

app.listen(8080,(err)=>{
    if(err){
        console.log("Something went wrong")
    }else{
        console.log("server is up an running on port 8080")
    }
})