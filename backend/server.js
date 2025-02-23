import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import shoeRouter from "./routes/shoeRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
//app congif

const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

// api endpoints
app.use("/api/shoe",shoeRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://ramonrbakuri:ramoramo@cluster0.64ola.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0