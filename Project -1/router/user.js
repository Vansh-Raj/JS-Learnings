
const {Router} = require("express")

const userRouter = Router();

userRouter.post("/signup",function (req,res){
    res.json({
        message:"Signup endpoint"
    })

})

userRouter.post("/login",function (req,res){
    res.json({
        message:"Signup endpoint"
    })
})

userRouter.get("/purchases",function (req,res){
    res.json({
        message:"Signup endpoint"
    })
})

module.exports = {
    userRouter:userRouter
}