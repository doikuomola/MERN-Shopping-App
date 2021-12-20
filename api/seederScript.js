const Product = require('./models/product')
const products = require('./data/products')
const connectDB = require('./config/db')
require('dotenv').config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({})
    await Product.insertMany(products)
    console.log("Data import success")
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1)
  }
}

importData();