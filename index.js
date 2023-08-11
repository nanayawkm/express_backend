const express = require('express');

const server = express();

const handleAllTypesOfRequest = function(req, res){
    res.send("Response from server.use");
}
const handleProfileRequestType = function(req, res){
    res.send("Responded to profile request with method value put ")
}
const handleProfileDeleteType = function(req, res){
    res.send("Responded to profile request with method value delete ")
}


server.post("/profile",handleAllTypesOfRequest);
server.get("/login",function(req,res){res.send('welcome to login page')});
server.put("/profile",handleProfileRequestType);
server.delete("/signup",handleProfileDeleteType)

server.listen(3000,function(){console.log('listening on port')});