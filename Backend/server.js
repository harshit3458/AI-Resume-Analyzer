const express=require("express")
const cookieParser=require("cookie-parser")
const cors=require("cors")

require("dotenv").config()
const connectToDB=require("./src/config/database")


connectToDB()
const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}))

const authRouter=require("./src/routes/auth.routes")
const interviewRouter=require("./src/routes/interview.routes")

app.use("/api/auth",authRouter)
app.use("/api/interview",interviewRouter)

const PORT=process.env.PORT || 3000;

if(process.env.VERCEL!=='1'){
  app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
}



module.exports=app

