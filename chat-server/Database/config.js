import mongoDB from 'mongodb'


const mongoClient = mongoDB.MongoClient


const connectToDb = (callback)=>{
    mongoClient.
    connect("mongodb+srv://skumar881675:f2woEcjqZ2CVCk0B@chat-socket.hd2fkbc.mongodb.net/?retryWrites=true&w=majority")
    .then((res)=>{
        console.log("connected")
        callback()
    }).catch((err)=>{
        console.log(err)
    })
}


export default connectToDb