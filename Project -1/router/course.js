const express = require("express");
const Router = express.Router;

const courseRouter = Router();

courseRouter.post("course/purchase",function (req,res){
    res.json({
        message:"Signup endpoint"
    })
})

courseRouter.get("course/preview",function (req,res){
    res.json({
        message:"Signup endpoint"
    })
})

module.exports = {
    courseRouter:courseRouter
}