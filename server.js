const mongoose = require('mongoose');
const express = require('express');
const mongoString = 'mongodb://localhost:27017/one-to-one-population'
const routes = require('./routes/routes');
var users = require('./models/User');

const app = express();
app.use(express.json());

app.use('/api',routes);


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})