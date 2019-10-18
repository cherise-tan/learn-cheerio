const express = require("express")
const server = express()




server.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})


module.exports = server