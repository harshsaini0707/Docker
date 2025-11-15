import express from "express";
import dotenv  from "dotenv"

dotenv.config();
const PORT =  process.env.PORT ? +process.env.PORT : 8000;

const app  = express();

app.get("/" , async(req,res)=>{
    return res.json({
        status : true,
        message :"server is running"
    })
})


app.listen(PORT , ()=>{
    console.log("Server started!!");
    
})