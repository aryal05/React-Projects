import express from 'express'
import authRoutes from './routes/auth.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

console.log(process.env.MONGO_URI)

app.use("/api/auth",authRoutes)

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
});