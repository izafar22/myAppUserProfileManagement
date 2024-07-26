require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Load environment variables from the appropriate .env file
//const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `.env` });

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});