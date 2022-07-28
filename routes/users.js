const express = require('express')
// Router is like creating an instance of express app

const router = express.Router()

router.get("/",(req,res)=>res.send("user list"))

router.get("/new",(req,res)=>res.send("user form"))

module.exports = router