const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
// importing our database configuration
const connectDB = require('./config/dbConfig')
const port  = process.env.PORT || 3000;

const app = express();

const RegRoutes = require('./controllers/registration');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDB();
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));
app.use('/api', RegRoutes)

app.listen(3000, () => console.log('listening on port 3000'));