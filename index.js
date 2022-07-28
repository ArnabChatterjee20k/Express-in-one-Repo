const express = require('express')
const app = express()

// we use express.Router() to scale our api. It is like blueprint in flask


// setting view engine
app.set('view engine','ejs')

// using middleware for a single route
app.get("/",logger,(req,res)=>res.render("index",{text:"heloow"}))



// custom middleware
function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

// Linking router
const userRouter = require("./routes/users")
app.use("/users",userRouter) // /user is prefix . it will attach /users to every routes of user router
/** It means attach all the routes of userRouter to the end of /users */

app.listen(3000)