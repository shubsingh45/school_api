import mongoose from "mongoose";
import cors from 'cors'
import express from 'express'
import dotenv, { config } from 'dotenv';
import cookieParser from "cookie-parser";
import router from "./routes/UserRoutes.js";
dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())



const DbConnection = async () => {

    try {
        const connectToDb = await mongoose.connect(process.env.MONGO_URL).then(() =>{
            console.log("connect to db")
        }).catch((err) => console.log('connection err to db', err.message))
    } catch (error) {
        console.log(error.message)
    }
}
DbConnection()

//routes
app.use(router)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is runing on port ${PORT}`))


