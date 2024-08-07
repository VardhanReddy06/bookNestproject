const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const UserOrderSchema= new Schema({
    user:{type:Schema.Types.ObjectId , ref:'User',required:true},
    book:{type:Schema.Types.ObjectId , ref:'Books',required:true},
    seller:{type:Schema.Types.ObjectId , ref:'Seller',required:true},
    address:{type:String , require:true},
    City : {type:String , require:true},
    pincode:{type:String , require:true},
    createdOn:{type:Date , default:Date.now}
})

const UserOrders=mongoose.model('UserOrders',UserOrderSchema);
module.exports=UserOrders;
