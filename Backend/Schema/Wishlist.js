const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const WishlistSchema= new Schema({
    user:{type:Schema.Types.ObjectId , ref:'Users'},
    book:{type:Schema.Types.ObjectId , ref:'Books'}
})

const Wishlist = mongoose.model('Wishlist',WishlistSchema);
module.exports=Wishlist;
