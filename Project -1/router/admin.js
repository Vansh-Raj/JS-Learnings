const {Router} = require ("express");
const adminRouter = Router();
const {adminModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken");
const {adminMiddleware}  =require("../middleware/admin")
const { JWT_ADMIN_PASSWORD} = require("../config");
//bcrypyt,zod,jsonwebtoken

 
adminRouter.post("/signup",async function (req,res){
    const {email,password,firstname,lastname} = req.body;//TODO:add zod validation
    //hashed the password


    //put inside a try catch block
    await adminModel.create({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname
    })
    res.json({
        message:"Signup Succeded"
    })

})

adminRouter.post("/login",async function (req,res){
    const {email,password}  =req.body;
    //bcrypt

    const admin = await adminModel.findOne({
        email:email,
        password:password
    });
    if(admin){
    const token= jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD);
    res.json({
        token:token
    })
    }else{
        res.status(403).json({
            message:"incorrect credential"
        })
    }
   
})

adminRouter.post("/course",adminMiddleware, async function (req,res){
    const adminId = req.adminId;
    const{title,desciption,imageurl,price} = req.body;
    const course = await courseModel.create({
        title:title,
        desciption:desciption,
        imageurl:imageurl,
        price:price,
        adminId:adminId
    })
    res.json({
        message:"course created",
        courseId:adminId
    })
})

adminRouter.put("/course",adminMiddleware,async function (req,res){
    const adminId = req.adminId;

    const{title,desciption,imageurl,price,courseId} = req.body;

    const course = await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },
        {
        title:title,
        desciption:desciption,
        imageurl:imageurl,
        price:price
    })
    res.json({
        message:"course created",
        adminId:adminId
    })
})
adminRouter.get("/course/bulk",adminMiddleware,async function (req,res){
    const adminId = req.adminId;
    const courses = await courseModel.find({
        creatorId:adminId
    })
    res.json({
        message:"Courses",
        courses:courses
    })
})

module.exports = {
    adminRouter:adminRouter
}