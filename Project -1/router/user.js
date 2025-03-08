const {Router} = require("express");
const {userModel, purchaseModel} = require("../db");
const userRouter = Router();
const {userMiddleware} = require("../middleware/user")
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD} = require("../config");

userRouter.post("/signup",async function (req,res){
    const {email,password,firstname,lastname} = req.body;//TODO:add zod validation
    //hashed the password


    //put inside a try catch block
    await userModel.create({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname
    })
    res.json({
        message:"Signup Succeded"
    })

})

userRouter.post("/login",async function (req,res){
    const {email,password}  =req.body;
    //bcrypt

    const user = await userModel.findOne({
        email:email,
        password:password
    });
    if(user){
    const token= jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD);
    res.json({
        token:token
    })
    }else{
        res.status(403).json({
            message:"incorrect credential"
        })
    }
   
})

userRouter.get("/purchases",userMiddleware,async function (req,res){
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId
    })
    res.json({
        purchases
    })
})

module.exports = {
    userRouter:userRouter
}