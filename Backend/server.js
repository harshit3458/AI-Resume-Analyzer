require("dotenv").config()
const app=require("./src/app")
const connectToDB=require("./src/config/database")



connectToDB()

const PORT=process.env.PORT || 3000;

if(process.env.VERCEL!=='1'){
  app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
}

module.exports=app