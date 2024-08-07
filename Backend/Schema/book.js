const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name:{type:String , required:true},
    author: { type: String, required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'Seller', required: true },
    genre : {type:String , required:true},
    price : {type:Number , required:true},
    imageurl : {type:String , required:true}
})
const Books = mongoose.model('Books',BookSchema);
module.exports = Books;
