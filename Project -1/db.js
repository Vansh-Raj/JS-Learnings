const mongoose= require('mongoose');
console.log("connected");
mongoose.connect("mongodb+srv://vanshraj50:NBCBhJ299wIwSE2O@cluster0.tolc9.mongodb.net/coursera-app")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UsersSchema = new Schema({
    
    email:String,
    password:String,
    firstName:String,
    lastName:String
});
const adminSchema = new Schema({
    
    email:String,
    password:String,
    firstName:String,
    lastName:String
});
const courseSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    imageURL:String,
    creatorId:ObjectId
});

const purchaseSchema = new Schema({
    userId:ObjectId,
    courseId:ObjectId
})

const userModel = mongoose.model("user",UsersSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("Purchase",purchaseSchema);

module.export = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}