const express = require("express")
const cors = require("cors")

const app=express()

const port=4000;

require("dotenv").config()

const connection = require("./db_connection")


connection()

app.use(express.json())

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    method:[
        "GET","POST","PUT","PATCH","DELETE"
    ]
}))

const route=require("./routes/blogRoutes")



app.use("/api",route)



app.listen(port,console.log("Server is running",port))