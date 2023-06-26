import cors from "cors";
import express, { Application } from "express";
import router from "./Routes/userRouter";

const appConfig =(app:Application)=>{
    app
    // middlewares
    .use(express.json())
    .use(cors())

    // router
    .use("/api" ,router);
}

export default appConfig