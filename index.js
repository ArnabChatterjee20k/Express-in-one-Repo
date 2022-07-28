const express = require('express')
const app = express()

// app.get("/",async(req,res,next)=>res.send("hellow"))

// routes
app.get("/",async(req,res)=>{
    console.log("Request at /")
    // res.sendStatus(200)
    // res.status(200).send("daat")
    res.status(200).json({message:"200"})
})

// sending file
app.get("/file",async(req,res)=>res.download("package.json"))


app.listen(3000)