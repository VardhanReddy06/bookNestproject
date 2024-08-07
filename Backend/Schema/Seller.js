const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const SellerSchema = new Schema({
    name:{type:String , required:true},
    password:{type:String , required:true},
    email:{type:String , required:true},
})
const Seller = mongoose.model('Seller', SellerSchema);
module.exports = Seller;
