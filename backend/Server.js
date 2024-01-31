
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const Port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/productDB' ,{useNewUrlParser: true});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
});
const User = mongoose.model('User', userSchema);




const productSchema = new mongoose.Schema({
    Itemname: { type: String, required: true }, // Added required: true
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

const Product = mongoose.model('Product' , productSchema);



app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Signin successful' });
  } catch (error) {
    console.error('Error during signin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error('Error fetching product data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(Port, ()=>{
    console.log(`Serevre is Running on ${Port} `)
})