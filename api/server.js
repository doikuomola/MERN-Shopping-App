// @ts-nocheck
const express = require('express')
const app = express()
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
// const stripeRoutes = require('./routes/stripeRoutes');
dotenv.config();

const port = process.env.PORT || 5000

connectDB();

app.use(express.json())
app.use(morgan("dev"))

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
// app.use("/api/checkout", stripeRoutes);

// app.get('/', (req, res) => res.send('API is running!'))

app.listen(port, () => console.log(`Server started on  localhost:${port}`))