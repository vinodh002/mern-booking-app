import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/Auth.js"
import usersRoute from "./routes/Users.js"
import hotelsRoute from "./routes/Hotels.js"
import roomsRoute from "./routes/Rooms.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
dotenv.config()
mongoose.set('strictQuery', false);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("DB");
    } catch (error) {
        console.log(error);
    }
}


// middleware
app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.use("/api/auth" , authRoute)
app.use("/api/users" , usersRoute)
app.use("/api/hotels" , hotelsRoute)
app.use("/api/rooms" , roomsRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500 
    const errorMessage = err.message || "something went wrong" 

   return res.status(errorStatus).json(
    {
        success:false,
        status:errorStatus,
        message:errorMessage,
    }
   )
})


app.listen(8000, () => {
    connect()
    console.log("connected");
})
