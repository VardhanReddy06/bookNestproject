const express = require('express')
const PORT=8000;
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/BookNest',{});

const User = require('./Schema/user')
const Book = require('./Schema/book')
const Seller = require('./Schema/Seller')
const Admin = require('./Schema/Admin')
const Orders = require('./Schema/Orders')
const Wishlist = require('./Schema/Wishlist');
const UserOrders = require ('./Schema/UserOrders')


const app = express()
app.use(express.json()) //middleware

app.use(cors({
    origin:"*",
}));

//USER

app.post('/userlogin',(req,res)=>{
    const userinfo = req.body;
    const user = User.findOne({
        email:userinfo.email
    }).then(user =>{
        if(user){
            if(user.password===userinfo.password){
                return res.json({status:"Success",message:{name:user.name,email:user.email,id:user._id}})
            }
            else{
                res.json('incorrect password')
            }
        }
        else{
            res.json("user doesn't exists")
        }
    })
});
app.post('/usersignup', async (req, res) => {
    const userinfo = req.body;
    try {
      const user = await User.findOne({ email: userinfo.email });
      if (user) {
        return res.status(400).json({ message: "This email is already registered. Please log in with your credentials." });
      } else {
        const user2 = await User.create({ name: userinfo.name, email: userinfo.email, password: userinfo.password });
        return res.status(201).json({ message: "Account Created Successfully",id:user2._id });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Error in creating account', error: err.message });
    }
  });
  
app.get('/allbooks',async(req,res)=>{
    try{
        const books=await Book.find();
        res.json(books);
    }
    catch(err){
      res.send('Server Issue');
    }
});
app.get('/getorders/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const orders = await Orders.find({ user: id })
        .populate('book') // populate the 'book' field
        .populate('seller'); // populate the 'seller' field
  
      res.json(orders);
    } catch (err) {
      res.json('error in finding orders: ' + err);
    }
  });
app.get('/getuserorders/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const userorders = await UserOrders.find({ user: id })
        .populate('book') // populate the 'book' field
        .populate('seller'); // populate the 'seller' field
  
      res.json(userorders);
    } catch (err) {
      res.json('error in finding orders: ' + err);
    }
  });
app.post('/adduserorder',async(req,res)=>{
    const userorder=req.body;
    try{
        const uorder = new UserOrders({user:userorder.user,book:userorder.book,seller:userorder.seller,City:userorder.City,address:userorder.address,pincode:userorder.pincode});
        await uorder.save();
        res.json(uorder);
    }
    catch(err){
        res.send(err+"failed to update orders");
    }
})
app.post('/userorder',async(req,res)=>{
    const uorder=req.body;
    try{
        const order = new Orders({user:uorder.user,book:uorder.book,seller:uorder.seller});
        await order.save();
        res.json(order);
    }
    catch(err){
        res.send(err+"failed to update orders");
    }
})
app.get('/wishlist/:user', async (req, res) => {
    const user = req.params.user;
    try {
        const list = await Wishlist.find({ user }).populate('book');
        res.json(list);
    } catch (err) {
        res.json( err + 'Failed to fetch tasks' );
    }
});
app.post('/wishlist/add', async (req, res) => {
    const wishadd = req.body;
    try {
      const item = await Wishlist.findOne({ book: wishadd.book });
  
      if (item) {
        return res.status(400).json('Item already added in wishlist');
      }
  
      const newitem = new Wishlist({ user: wishadd.user, book: wishadd.book });
      await newitem.save();
  
      res.json(newitem);
    } catch (err) {
      res.status(500).send('Cannot add item: ' + err);
    }
  });
app.post('/wishlist/delete',async(req,res)=>{
    const item = req.body;
    try{
        await Wishlist.findOneAndDelete({item});
        res.json('deleted succesfully');
    }
    catch(err){
        res.json('error occured while deletion'+err);
    }
});

//SELLER 

app.post('/sellerlogin',async(req,res)=>{
    const sellerinfo=req.body
    Seller.findOne({
        email:sellerinfo.email
    }).then(seller =>{
        if(seller){
            if(seller.password===sellerinfo.password){
                return res.json({status:"Success",message:{id:seller.id,name:seller.name,email:seller.email}})
            }
            else{
                res.json('incorrect password')
            }
        }
        else{
            res.json("seller doesn't exists")
        }
    })
})
app.post('/sellersignup', async (req, res) => {
    const sinfo = req.body;
    try {
      const seller = await Seller.findOne({ email: sinfo.email });
      if (seller) {
        return res.status(400).json({ message: 'Seller already exists.' });
      }else{
        const newSeller = new Seller({ name: sinfo.name, email: sinfo.email, password: sinfo.password });
      await newSeller.save();
      res.status(201).json({ message: 'Seller created successfully.' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error occurred while signing up.', error: err.message });
    }
  });
  
app.post('/addbooks',async(req,res)=>{
    const newbook=req.body;
    try{
      const book=await Book.findOne({name:newbook.name});
      if (book){
        res.json('book already exist')
      }
      
      const addbook=new Book({name:newbook.name,author:newbook.author,seller:newbook.seller,genre:newbook.genre,price:newbook.price,imageurl:newbook.imageurl});
      await addbook.save();
      res.json('book added successfully');
    }
    catch(err){
        res.json('cannot add book');
    }
})
app.get('/seller/getbooks/:id',async(req,res)=>{
    const id=req.params.id
    try{
      const list = await Book.find({seller:id});
      res.json(list);
    }
    catch(err){
        res.json('error in loading books');
    }
})
app.get('/seller/getorders/:id', async (req, res) => {
  const id = req.params.id;
  try {
      const list = await UserOrders.find({ seller: id }).populate('book').populate('seller');
      res.json(list);
  } catch (err) {
      res.json('error in loading Orders');
  }
});
app.delete('/deletebook/:id', async (req, res) => {
    const  id  = req.params.id; // Correct destructuring
    try {
      const order = await Orders.findOne({ _id: id }); // Find the order with the specific book ID
      if (!order) {
        return res.status(404).json('Order not found');
      }
  
      await Orders.findByIdAndDelete(order._id); // Delete the order
      res.json('Deleted book successfully');
    } catch (err) {
      res.status(500).json('Error while deleting book');
    }
  });
  app.delete('/seller/deletebook/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json('Book not found');
        }

        const userOrders = await UserOrders.find({ book: id });
        const cart = await Orders.find({book:id});
        if (userOrders.length > 0) {
            await UserOrders.deleteMany({ book: id });
        }
        if (cart.length > 0) {
          await Orders.deleteMany({ book: id });
      }

        await Book.findByIdAndDelete(id);
        res.json('Deleted book successfully');
    } catch (err) {
        res.status(500).json('Error while deleting book');
    }
});

  app.delete('/deletewishbook/:id', async (req, res) => {
    const  id  = req.params.id; // Correct destructuring
    try {
      const order = await Wishlist.findOne({ _id: id }); // Find the order with the specific book ID
      if (!order) {
        return res.status(404).json('Order not found');
      }
  
      await Wishlist.findByIdAndDelete(order._id); // Delete the order
      res.json('Deleted book successfully');
    } catch (err) {
      res.status(500).json('Error while deleting book');
    }
  });
  

//Admin

app.post('/adminlogin',(req,res)=>{
    const admininfo = req.body;
    Admin.findOne({
        email:admininfo.email
    }).then(user =>{
        if(user){
            if(user.password===admininfo.password){
                return res.json({status:"Success",user:{name:user.name,email:user.email}});
            }
            else{
                res.json('incorrect password')
            }
        }
        else{
            res.json("admin doesn't exists")
        }
    })
});
app.get('/ausers',(req,res)=>{
    User.find()
    .then((user)=>{
        res.status(200).json(user);
    })
    .catch(() => {
        res.sendStatus(500);
    })
})
app.delete('/userdelete/:id',(req,res)=>{
    const { id }=req.params
     User.findByIdAndDelete(id)
     .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.json('error while deleting');
    });
  })
  app.get('/asellers',(req,res)=>{
    Seller.find()
    .then((seller)=>{
        res.status(200).json(seller);
    })
    .catch(() => {
        res.sendStatus(500);
    })
  })
  app.delete('/sellerdelete/:id',(req,res)=>{
    const { id }=req.params
     Seller.findByIdAndDelete(id)
     .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.json('error while deleting');
    });
  })
  app.get('/aorders', async (req, res) => {
    try {
      const order = await UserOrders.find()
      .populate('user')
      .populate('book')
      .populate('seller') ;// populate the 'seller' field
  
      res.status(200).json(order);
    } catch (err) {
      res.json('error in finding orders: ' + err);
    }
  });
  app.delete('/orderdelete/:id',(req,res)=>{
    const { id }=req.params
     UserOrders.findByIdAndDelete(id)
     .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        res.json('error while deleting');
    });
  })


















app.listen(PORT, () => {
    console.log(`server is running on  ${PORT}`)
})  