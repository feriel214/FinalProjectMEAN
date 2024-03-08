const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
app.use(express.json());

// Set up CORS headers
app.use(cors());
app.options('*', cors());

const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

// ROUTES MIDDLEWARE
app.use('/apiUsers', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
