const express = require('express')
const app = express()

// we use express.Router() to scale our api. It is like blueprint in flask


// setting view engine
app.set('view engine','ejs')

// Linking router
const userRouter = require("./routes/users")
app.use("/users",userRouter) // /user is prefix . it will attach /users to every routes of user router
/** It means attach all the routes of userRouter to the end of /users */

app.listen(3000)