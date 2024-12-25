import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./Routes/userRoute.js"
import imageRouter from "./Routes/imageRoute.js"

dotenv.config()
const App = express()

App.use(express.json())
App.use(cors())
const PORT = process.env.PORT || 8080

mongoose.connect(`${process.env.MONGO_URI}`).then(()=> {
    console.log("Connected to MongoDB")
}).catch((e)=> {
    console.log(e)
})

App.use("/api/user",userRouter)
App.use("/api/",imageRouter)

App.listen(PORT, ()=> console.log('Server active'))