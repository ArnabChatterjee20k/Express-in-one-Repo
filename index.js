const express = require('express')
const app = express()

// setting view engine
app.set('view engine','ejs')

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

// rendering html file(we need view engine and by default the directory of files is views)
app.get("/home",(req,res)=>res.render("index",{text:"world"}))

app.get("/")
app.listen(3000)