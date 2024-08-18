import express from 'express'
import authRoutes from './routes/auth.js'
import dotenv from 'dotenv'
import connectMongoDb from './db/connectMongoDb.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// console.log(process.env.MONGO_URI)

app.use(express.json());//to parse req.body

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`Serrver is running on port ${PORT}`)
    connectMongoDb();
});