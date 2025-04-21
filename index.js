import express from "express";
import cors from "cors";
import connectDB from "./Db/connect.js";
import dotenv from "dotenv"
import router from "./router/bookRouter.js";

const app=express();


app.use(cors());

dotenv.config();
app.use(express.json());
app.use("/api/v1",router);


app.listen(process.env.PORT,()=>{
    console.log(`app is running at ${process.env.PORT}`)
})