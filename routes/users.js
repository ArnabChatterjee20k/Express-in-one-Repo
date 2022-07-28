const express = require('express')
// Router is like creating an instance of express app

const router = express.Router()

// making a common function to run whenever we get id in url in any route
// it is a middleware(stuff that runs between request sent to server and actual response returned to user)
router.param((req,res,next,id)=>{
    console.log(id)
    next() //running next function
}) 


router.get("/",(req,res)=>res.send("user list"))

router.get("/new",(req,res)=>res.send("user form"))

router.get("/:id",(req,res)=>{
    id = req.params.id
    res.send(id)

    // if we make another route request "/new" it will be executed in this route only
})

// Express match the routes one by one /new and /:id will be treated same. So put static routes above dynamic routes
// router.get("/new")


// We can use router.get("/") and router.post("/") to do for a same route

// Chaining to solve this
router.route("/chain")
.get((req,res)=>res.send("ee"))
.post((req,res)=>res.send("hie"))
module.exports = router