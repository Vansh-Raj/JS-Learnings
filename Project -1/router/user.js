const express = require("express");
const Router = express.Router;

const userRouter = Router();

userRouter.post("user/signup",function (req,res){
    res.json({
        message:"Signup endpoint"
    })

})

userRouter.post("user/login",function (req,res){
    res.json({
        message:"Signup endpoint"
    })
})

userRouter.get("user/purchases",function (req,res){
    res.json({
        message:"Signup endpoint"
    })
})

module.exports = {
    userRouter:userRouter
}