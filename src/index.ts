import express, { Application } from "express"
import appConfig from "./app";
import dbConfig from "./Config/db";

const app:Application =express();

const server =async()=>{
    try {
        appConfig(app);  //initialize app
        dbConfig()  //initialize db
    } catch (error:any) {
console.log(error)
    }
app.listen(2000,()=>{
    console.log(`server is listening on port ${2000}`)
});
};

// server intailization
server();


