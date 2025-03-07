const express = require('express');
const mongoose = require("mongoose");
const { userRouter } = require('./router/user');
const {courseRouter} = require('./router/course') ;
const {adminRouter} = require('./router/admin');
const app = express();

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

async function main(){
   await mongoose.connect("mongodb+srv://vanshraj50:NBCBhJ299wIwSE2O@cluster0.tolc9.mongodb.net/coursera-app");

console.log("listening");
app.listen(3000);


}

main();