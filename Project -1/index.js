require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const { userRouter } = require('./router/user');
const {courseRouter} = require('./router/course') ;
const {adminRouter} = require('./router/admin');
const app = express();
app.use(express.json());

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

async function main(){
   await mongoose.connect(process.env.MONGO_URL);

console.log("listening");
app.listen(3000);


}

main();