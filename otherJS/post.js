import express from "express";
const post_Router =express. Router();


post_Router.get("/home",(req,res)=>{
    res.send("<h1>hello</h1>");
})


module.exports = post_Router;