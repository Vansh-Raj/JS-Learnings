const {Router} = require ("express");
const adminRouter = Router();
const {adminModel } = require("../db")

adminRouter.post("/purchase",function (req,res){
    res.json({
        message:"Signup endpoint"
    })
})

adminRouter.get("/preview",function (req,res){
    res.json({
        message:"Signup endpoint"
    })
})
module.exports = {
    adminRouter:adminRouter
}