import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Route from "./routers/route.js"


const app=express()
dotenv.config()
app.use(express.json())

// routers
app.use("/",Route)

// DB Connection
const USERNAME=process.env.USERNAME
const PASSWORD=process.env.PASSWORD
connection(USERNAME,PASSWORD)

// server listening
const PORT=8000
app.listen(PORT,()=>console.log(`server listening at port ${PORT}..`))