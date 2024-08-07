const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema= new Schema({
    user:{type:Schema.Types.ObjectId , ref:'User',required:true},
    book:{type:Schema.Types.ObjectId , ref:'Books',required:true},
    seller:{type:Schema.Types.ObjectId , ref:'Seller',required:true},
    createdOn:{type:Date , default:Date.now}
})

const Orders=mongoose.model('Orders',OrderSchema);
module.exports=Orders;
