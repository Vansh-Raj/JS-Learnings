const {userMiddleware} = require("../middleware/user")
const {Router} = require("express")
const {purchaseModel, courseModel} = require("../db")
const courseRouter = Router();

courseRouter.post("/purchase",userMiddleware,async function (req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"YOu have succesfully bought the course"
    })
})

courseRouter.get("/preview",async function (req,res){
    const courses = await courseModel.find({});
    res.json({
       courses
    })
})

module.exports = {
    courseRouter:courseRouter
}